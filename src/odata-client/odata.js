import odata from 'odata';
import { FETCH_PRODUCTS,FETCH_COUNT } from './../actions/types';
import axios from 'axios';

const growingThreshold = 5;
//const svcURL = 'https://cors-anywhere.herokuapp.com/services.odata.org/Northwind/Northwind.svc/Products';
const svcURL = 'products';

export function fetchProducts(options) {
  let top = growingThreshold;
  let skip = 0;
  if (options.top) {
    top = options.top;
  }
  if (options.skip) {
    skip = options.skip;
  }
  odata().config({
    endpoint:'/',
    autoFormat: false,
    version: 4,
    headers: [{'Accept':'application/json'}]
  });
  const url=odata(svcURL).top(top).skip(skip).query();
  const request = axios.get(url);
  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data.data
      });
    });
  };
}



export function fetchCount() {

  const request = axios.get('/products/count');
  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: FETCH_COUNT,
        payload: data.data
      });
    });
  };
}