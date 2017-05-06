"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.product = this.productService.getProduct(id);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'qs-product-detail',
        template: "\n    <h2>ProductDetail for {{product.Name}}</h2>\n    <h3>Futures</h3>\n    <table>\n        <tr>\n            <th>ID</th>\n            <th>Symbol</th>\n            <th>Expires</th>\n            <th>Open</th>\n            <th>High</th>\n            <th>Low</th>\n            <th>Last</th>\n        </tr>\n        <tr *ngFor=\"let future of product.Futures\">\n            <td>{{future.ID}}</td>\n            <td>{{future.Symbol}}</td>\n            <td>{{future.ExpirationDate | date:'shortDate'}}</td>\n            <td>{{future.Price.Open}}</td>\n            <td>{{future.Price.High}}</td>\n            <td>{{future.Price.Low}}</td>\n            <td>{{future.Price.Last}}</td>\n        </tr>    \n    </table>\n    <h3>Expirations</h3>\n    <table>\n        <tr>\n            <th>ID</th>\n            <th>Symbol</th>\n            <th>Expires</th>\n        </tr>\n        <tr *ngFor=\"let expiration of product.Expirations\">\n            <td>{{expiration.ID}}</td>\n            <td>{{expiration.Symbol}}</td>\n            <td>{{expiration.ExpirationDate | date:'shortDate'}}</td>\n        </tr>            \n    </table>\n    "
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute,
        common_1.Location])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map