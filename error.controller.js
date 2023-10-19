// error.controller.js
// Import any necessary modules or dependencies
// Example: const SomeModule = require('some-module');
// Define your controller function
function handleError(req, res, error) {
    console.error('An error occurred:', error);
//
    res.status(500).json({ error: 'An error occurred' });
  }
  
function getErrorMessage(errMsg) {
console.log(errMsg);
}


// Export the controller function
export default  {
    handleError: handleError,
    getErrorMessage:getErrorMessage
};
