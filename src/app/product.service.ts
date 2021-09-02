import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  createProduct(product: NgForm){
    return this.db.list('/products').push(product.value);
  }

  getAll(): Observable<any>{
    const products = this.db.list('/products').valueChanges();
    return products;
  }
}
