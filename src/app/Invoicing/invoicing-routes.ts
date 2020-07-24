import {InvoicingComponent} from "./components/invoicing/invoicing.component";
import { Routes } from '@angular/router';

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
