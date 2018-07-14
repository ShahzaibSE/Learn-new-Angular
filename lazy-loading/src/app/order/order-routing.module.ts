import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components.
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path : "", component : OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
