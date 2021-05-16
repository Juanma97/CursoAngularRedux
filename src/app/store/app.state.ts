import { Product } from '../model/Product';

export interface AppState {
  readonly cartProducts: Array<Product>;
  readonly mainProducts: Array<Product>;
};