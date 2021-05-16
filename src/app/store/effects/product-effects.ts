import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ProductActionTypes, RetrieveAllProductsSuccessAction } from "../actions/product-actions";
import { map, mergeMap } from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class ProductEffects {

    loadProducts$ = createEffect(() => this.actions$.pipe(
            ofType(ProductActionTypes.RETRIEVE_ALL_PRODUCTS),
            mergeMap(() => this.firestore.collection('products').snapshotChanges()
                .pipe(map(data => {
                    const products = data.map((snap) => snap.payload.doc.data());
                    return new RetrieveAllProductsSuccessAction(products)
                }))
            )
    ));

    constructor(private actions$: Actions, private firestore: AngularFirestore) {}
}