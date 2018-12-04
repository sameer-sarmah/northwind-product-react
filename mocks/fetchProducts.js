const {products} = require('./data/Products'); 

const fetchProducts = (number)=>{
  const max_value=products.value.length;
  const generateRandomNumber=(min , max) =>
  {
    return Math.floor(Math.random() * (max-min) + min );
  }; 
  const product_indices=[];
  for(let index=0;index<number;index++){
    product_indices.push(generateRandomNumber(1,max_value));
  }

  const productsToReturn=[];
  product_indices.forEach((index)=>{
    productsToReturn.push( products.value.find((product)=>{
      return product.ProductID === index;
    }));
  });
  return productsToReturn;
};

module.exports.fetchProducts=fetchProducts;