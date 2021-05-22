import { Product } from '../../model/Product';
import { CartActions, CartActionTypes } from '../actions/cart-actions';


const initialStateCart: Array<Product> = [];

export function cartReducer(state: Array<Product> = initialStateCart, action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_CART:
      return [...state, action.payload];
    case CartActionTypes.DELETE_PRODUCT_CART:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}