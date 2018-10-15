import { AdlistComponent } from './../ad/adlist/adlist.component';
import { AddetailComponent } from './../ad/addetail/addetail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'/addetail', component: AddetailComponent},
  {path:"/adlist", component: AdlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutesRoutingModule { }
