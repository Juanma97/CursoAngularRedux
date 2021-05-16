import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  title: string;

  quantityInCart$: Observable<number>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.quantityInCart$ = this.store.select(store => store.cartProducts.length);
  }


  goToCart() {
    this.router.navigate(['cart']);
  }

  goToProductsPage() {
    this.router.navigate(['']);
  }

}
