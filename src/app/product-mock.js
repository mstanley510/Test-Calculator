"use strict";
var ProductMock = (function () {
    function ProductMock() {
    }
    ProductMock.prototype.Mock = function () {
        var products = new Array();
        products = [
            {
                ID: 1,
                Name: 'Eurodollars',
                Futures: [
                    {
                        ID: 1,
                        Symbol: 'EDM7',
                        ExpirationDate: new Date('1/1/2000'),
                        Price: {
                            Open: 100,
                            High: 100,
                            Low: 100,
                            Last: 100
                        }
                    },
                    {
                        ID: 2,
                        Symbol: 'EDU7',
                        ExpirationDate: new Date('1/1/2000'),
                        Price: {
                            Open: 100,
                            High: 100,
                            Low: 100,
                            Last: 100
                        }
                    },
                    {
                        ID: 3,
                        Symbol: 'EDZ7',
                        ExpirationDate: new Date('1/1/2000'),
                        Price: {
                            Open: 100,
                            High: 100,
                            Low: 100,
                            Last: 100
                        }
                    }
                ],
                Expirations: [
                    {
                        ID: 1,
                        Symbol: 'EDM7',
                        ExpirationDate: new Date('1/1/2000')
                    }
                ]
            },
            {
                ID: 2,
                Name: '30YR',
                Futures: [],
                Expirations: []
            }
        ];
        // let p = new Product();
        // p.ID = 1;
        // p.Name = 'Eurodollars';
        // p.Futures = new Array<Future>();
        // p.Expirations = new Array<Expiration>();
        // let f = new Future();
        // f.ID = 1;
        // f.Symbol = 'EDM7';
        // f.ExpirationDate = new Date("1/1/2000");
        // f.Price = new FuturePrice();
        // f.Price.Open = 99;
        // f.Price.High = 99.125;
        // f.Price.Low = 98.875;
        // f.Price.Last = 99.125;
        // p.Futures.push(f);
        // f = new Future();
        // f.ID = 2;
        // f.Symbol = 'EDN7';
        // f.ExpirationDate = new Date("1/1/2000");
        // f.Price = new FuturePrice();
        // f.Price.Open = 99;
        // f.Price.High = 99.125;
        // f.Price.Low = 98.875;
        // f.Price.Last = 99.125;
        // p.Futures.push(f);
        // let e = new Expiration();
        // e.ID = 1;
        // e.Symbol = 'EDM7';
        // e.ExpirationDate = new Date("1/1/2000");
        // p.Expirations.push(e);
        // e = new Expiration();
        // e.ID = 2;
        // e.Symbol = 'EDU7';
        // e.ExpirationDate = new Date("1/1/2000");
        // p.Expirations.push(e);
        // e = new Expiration();
        // e.ID = 3;
        // e.Symbol = 'EDZ7';
        // e.ExpirationDate = new Date("1/1/2000");
        // p.Expirations.push(e);
        // products.push(p);
        // p = new Product();
        // p.ID = 2;
        // p.Name = '30YR';
        // p.Futures = new Array<Future>();
        // f = new Future();
        // f.ID = 3;
        // f.Symbol = 'USM7';
        // f.ExpirationDate = new Date("1/1/2000");
        // f.Price = new FuturePrice();
        // f.Price.Open = 125;
        // f.Price.High = 125;
        // f.Price.Low = 125;
        // f.Price.Last = 125;
        // p.Futures.push(f);
        // f = new Future();
        // f.ID = 4;
        // f.Symbol = 'USN7';
        // f.ExpirationDate = new Date("1/1/2000");
        // f.Price = new FuturePrice();
        // f.Price.Open = 125;
        // f.Price.High = 125;
        // f.Price.Low = 125;
        // f.Price.Last = 125;
        // p.Futures.push(f);
        // products.push(p);
        return products;
    };
    return ProductMock;
}());
exports.ProductMock = ProductMock;
//# sourceMappingURL=product-mock.js.map