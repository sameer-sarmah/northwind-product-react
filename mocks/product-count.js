/* eslint no-unused-vars: 0 */
const {products} = require('./data/Products'); 
 
module.exports = {
  path: '/products/count',
  method:'GET',
  template:function(params, query, body, cookies, headers){
    return {count:products.value.length};
  }
};

