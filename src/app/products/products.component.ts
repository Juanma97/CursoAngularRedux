import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as Actions from '../store/actions/cart-actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = 'Productos';
  products = [
    {id: '1', name: 'PR1', price: 20}, 
    {id: '2', name: 'PR2', price: 10}, 
    {id: '3', name: 'PR3', price: 25},
    {id: '4', name: 'PR4', price: 30}, 
    {id: '5', name: 'PR5', price: 40}];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addCart(product) {
    this.store.dispatch(new Actions.AddProductCartAction({id: product.id, name: product.name, price: product.price})); 
  }

}
