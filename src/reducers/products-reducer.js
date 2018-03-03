import _ from 'lodash';
import { FETCH_PRODUCTS,FETCH_COUNT } from '../actions/types';

export default function(state = {count:0,products:[]}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:{
      const products =action.payload
      return {count:state.count,products:state.products.concat(products)};
    }
    case FETCH_COUNT:{
      const count = action.payload;
      return {products:state.products,"count":count};
    }
     default:
     return state; 
  }
}