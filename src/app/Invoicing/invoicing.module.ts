import { NgModule } from '@angular/core';

import {InvoicingComponent} from "./components/invoicing/invoicing.component";
import { routes } from './invoicing-routes';
import {RouterModule} from "@angular/router";
import {InvoiceListSearchComponent} from "./components/invoice-list-search/invoice-list-search.component";
import {InvoiceListComponent} from "./components/invoice-list/invoice-list.component";
import {InvoiceListSummaryComponent} from "./components/invoice-list-summary/invoice-list-summary.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import {AddInvoiceComponent} from "./components/add-invoice/add-invoice.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    InvoicingComponent,
    InvoiceListSearchComponent,
    InvoiceListComponent,
    InvoiceListSummaryComponent,
    InvoiceComponent,
    AddInvoiceComponent
  ],
  exports: [
  ],
  bootstrap: []
})
export class InvoicingModule { }
