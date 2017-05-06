import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-list',
  template: `
    <h2>ProductList</h2>
      <a *ngFor="let product of products" [routerLink]="['/detail', product.ID]">
        {{product.Name}}
      </a>    
    `
})

export class ProductListComponent implements OnInit  { 
      products : Product[];
      
      constructor(private productService: ProductService){}

      ngOnInit(): void{
          this.products = this.productService.getProducts();
      }
}
