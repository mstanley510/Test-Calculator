import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular {{name}}</h1>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/products">Products</a>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent  { 
  name = 'QuikStrike'; 
}
