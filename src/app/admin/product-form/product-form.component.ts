import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import {NgForm} from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: any;

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router) { 
     

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories$ = categories;
    })   
  }

  save(product: NgForm){
    console.log(product.value)
    // this.productService.createProduct(product)
    // this.router.navigate(['/admin/products'])
  }

}
