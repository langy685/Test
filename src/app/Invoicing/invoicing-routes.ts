import { Routes } from '@angular/router';

import {InvoicingComponent} from "./components/invoicing/invoicing.component";

export const routes: Routes = [
  {
    path: '',
    component: InvoicingComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
