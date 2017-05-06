import { Injectable } from '@angular/core';

import { Product } from './product';
import { ProductMock } from './product-mock';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor(){
        let pm = new ProductMock();
        this.products = pm.Mock();        
    }

    getProducts() : Product[]{
        return this.products;
    }

    getProduct(id: number) {
        return this.getProducts().find(x => x.ID === id);
    }
}
