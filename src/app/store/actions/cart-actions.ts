import { Action } from '@ngrx/store';
import { Product } from '../../model/Product';

export enum CartActionTypes {
  ADD_PRODUCT_CART = '[CART] Add Product',
  DELETE_PRODUCT_CART = '[CART] Delete Product'

}

export class AddProductCartAction implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT_CART;
  constructor(public payload: Product) { }

}
export class DeleteProductCartAction implements Action {
  readonly type = CartActionTypes.DELETE_PRODUCT_CART;
  constructor(public payload: string) { }
}

export type CartActions = 
  AddProductCartAction 
| DeleteProductCartAction