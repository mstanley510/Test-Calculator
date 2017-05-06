import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'qs-product-detail',
  template: `
    <h2>ProductDetail for {{product.Name}}</h2>
    <h3>Futures</h3>
    <table>
        <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Expires</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Last</th>
        </tr>
        <tr *ngFor="let future of product.Futures">
            <td>{{future.ID}}</td>
            <td>{{future.Symbol}}</td>
            <td>{{future.ExpirationDate | date:'shortDate'}}</td>
            <td>{{future.Price.Open}}</td>
            <td>{{future.Price.High}}</td>
            <td>{{future.Price.Low}}</td>
            <td>{{future.Price.Last}}</td>
        </tr>    
    </table>
    <h3>Expirations</h3>
    <table>
        <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Expires</th>
        </tr>
        <tr *ngFor="let expiration of product.Expirations">
            <td>{{expiration.ID}}</td>
            <td>{{expiration.Symbol}}</td>
            <td>{{expiration.ExpirationDate | date:'shortDate'}}</td>
        </tr>            
    </table>
    `
})

export class ProductDetailComponent implements OnInit  {    

    private product: Product;

    constructor (
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
        ) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.product = this.productService.getProduct(id);
    }
}
