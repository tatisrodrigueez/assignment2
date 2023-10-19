
import express from 'express';
import {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  removeProductById,
  removeAllProducts,
  findProductsByName
} from '../controllers/productController'; 

const router = express.Router();

router.get('/api/products', getAllProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products', addNewProduct);
router.put('/api/products/:id', updateProductById);
router.delete('/api/products/:id', removeProductById);
router.delete('/api/products', removeAllProducts);
router.get('/api/products', findProductsByName);

export default router;


