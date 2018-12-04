const {fetchProducts} = require('./fetchProducts'); 
module.exports =()=> {
  const data = { products: [] };
  const products = fetchProducts(5);
  data['products']=products;
  return data;
};