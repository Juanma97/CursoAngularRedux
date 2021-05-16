import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CartComponent } from './cart/cart.component';

import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart-reducer';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { productsReducer } from './store/reducers/product-reducer';
import { ProductEffects } from './store/effects/product-effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ToolbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartProducts: cartReducer, mainProducts: productsReducer}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
