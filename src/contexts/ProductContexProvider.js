import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContexProvider = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return <div></div>;
};

export default ProductContexProvider;
