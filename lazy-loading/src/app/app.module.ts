import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: 'app/customer/customer.module#CustomerModule'
  },
  {
    path: 'orders',
    loadChildren: 'app/order/order.module#OrderModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
