import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from "app/page2/page2.component";
import { Page1Component } from "app/page1/page1.component";

const routes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component}
  // {
  //   path: '',
  //   children: []
  // }
];


// 使用hash(#)可以使得舊版的瀏覽器可以直接用angular2的routing機制
// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     useHash: true
//   })],
//   exports: [RouterModule]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
