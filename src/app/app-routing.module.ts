import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InvoicingComponent} from "./components/invoicing/invoicing.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/invoices',
    pathMatch: 'full'
  },
  {
    path: 'invoices',
    component: InvoicingComponent ,
  },
  // {
  //   path: 'invoices',
  //   component: InvoicingComponent,
  //   loadChildren: () => import(
  //     './Invoicing/invoicing.module'
  //     ).then(
  //     m => m.InvoicingModule
  //   )
  // },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent,
  // },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
