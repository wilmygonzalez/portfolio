import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShopModule } from 'src/app/modules/shop/shop.module';
import { Product } from '../models/product';

@Injectable()
export class ShopService {

  constructor(private _firestore: AngularFirestore) { }

  getAll(): Observable<Product[]> {
    return this._firestore.collection('products').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addProduct(product: Product): any {
    this._firestore.collection('products').add(product);
  }

}
