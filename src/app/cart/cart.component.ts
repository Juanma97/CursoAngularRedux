import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../model/Product';
import { AppState } from '../store/app.state';
import * as Actions from '../store/actions/cart-actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title: string = 'Carrito';
  
  products$: Observable<Array<Product>>;

  // products = [
  //   {title: 'PR1', price: 20}, 
  //   {title: 'PR2', price: 10}, 
  //   {title: 'PR3', price: 25},
  //   {title: 'PR4', price: 30}, 
  //   {title: 'PR5', price: 40}];

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    this.products$ = this.store.select(store => store.cartProducts);
  }

  deleteFromCart(id) {
    this.store.dispatch(new Actions.DeleteProductCartAction(id));
  }

}
