import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  categories$: any;
  selectedCategory: any;
  product : any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnDestroy(): void {
    // this.productService.
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: any) => {
      this.categories$ = categories;
    });

    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.productService.get(id).subscribe((p: any) => this.product = p)
  }

  save(product: Product) {
    this.productService.createProduct(product)
    this.router.navigate(['/admin/products'])
  }
}
