import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { ProductService } from './product.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'products',
          component: ProductListComponent
        },
        {
          path: 'detail/:id',
          component: ProductDetailComponent
        }
      ])
    ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailComponent
    ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
