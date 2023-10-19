
import Product from './server/models/product';
import errorHandler from './error.controller.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().select('name description price quantity category');
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product)
      return res.status(400).json({
        error: 'Product not found',
      });
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export const addNewProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    return res.status(200).json({
      message: 'Product added successfully.',
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export const updateProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product)
      return res.status(400).json({
        error: 'Product not found',
      });
    product.set(req.body);
    product.updated = Date.now();
    await product.save();
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export const removeProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product)
      return res.status(400).json({
        error: 'Product not found',
      });
    const deletedProduct = await product.remove();
    res.json(deletedProduct);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export const removeAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All products removed successfully.' });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export const findProductsByName = async (req, res) => {
	const nameKeyword = 'kw'; 
	try {
	  const products = await Product.find({
		name: { $regex: nameKeyword, $options: 'i' },
	  });
	  res.json(products);
	} catch (err) {
	  return res.status(400).json({
		error: errorHandler.getErrorMessage(err),
	  });
	}
  };
  
//export default {getAllProducts,getProductById,addNewProduct,updateProductById,removeProductById,removeAllProducts,findProductsByName}