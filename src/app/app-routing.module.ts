import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InvoicingComponent} from "./Invoicing/components/invoicing/invoicing.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent ,
  },
  {
    path: 'invoices',
    loadChildren: () => import(
      '../app/Invoicing/invoicing.module'
      ).then(
      m => m.InvoicingModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
