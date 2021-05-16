import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import * as CartActions from '../store/actions/cart-actions';
import * as ProductActions from '../store/actions/product-actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = 'Productos';
  // products = [
  //   {id: '1', name: 'PR1', price: 20}, 
  //   {id: '2', name: 'PR2', price: 10}, 
  //   {id: '3', name: 'PR3', price: 25},
  //   {id: '4', name: 'PR4', price: 30}, 
  //   {id: '5', name: 'PR5', price: 40}];

  products$: Observable<Array<Product>>;;

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(new ProductActions.RetrieveAllProductsAction());

    this.products$ = this.store.select(store => store.mainProducts);
  }

  ngOnInit(): void { }

  addCart(product) {
    this.store.dispatch(new CartActions.AddProductCartAction({id: product.id, name: product.name, price: product.price})); 
  }

}
