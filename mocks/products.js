/* eslint no-unused-vars: 0 */
const {fetchProducts} = require('./fetchProducts');
module.exports = {
  path: '/products',
  status: (req, res, next) => {
    next();
  },
  method:'GET',
  template:function(params, query, body, cookies, headers){
    return fetchProducts(5);
  }
};

