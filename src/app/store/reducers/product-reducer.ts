import { Product } from '../../model/Product';
import { ProductActions, ProductActionTypes } from '../actions/product-actions';


const initialStateProducts: Array<Product> = [];

export function productsReducer(state: Array<Product> = initialStateProducts, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.RETRIEVE_ALL_PRODUCTS_SUCCESS:
        return action.payload;
    default:
      return state;
  }
}