import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InvoicingComponent} from "./components/invoicing/invoicing.component";
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
    component: InvoicingComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
