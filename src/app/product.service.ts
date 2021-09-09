import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  createProduct(product: Product){
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<any>{
    const products = this.db.list('/products').valueChanges();
    return products;
  }

  get(productId: string){
    return this.db.object('/products/' + productId).valueChanges()
  }
}
