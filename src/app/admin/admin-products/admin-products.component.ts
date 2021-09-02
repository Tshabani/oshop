import { ProductService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  product$: any;

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productService.getAll().subscribe((product) => {
      this.product$ = product;
    })
  }

}
