import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AddInvoiceComponent} from "./components/add-invoice/add-invoice.component";
import {InvoiceListSearchComponent} from "./components/invoice-list-search/invoice-list-search.component";
import {InvoicingComponent} from "./components/invoicing/invoicing.component";
import {InvoiceListComponent} from "./components/invoice-list/invoice-list.component";
import {InvoiceListSummaryComponent} from "./components/invoice-list-summary/invoice-list-summary.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import { routes } from './invoicing-routes';
import {InvoiceDispatchersService} from "./state/services/invoice-dispatchers.service";
import {InvoiceSelectorsService} from "./state/services/invoice-selectors.service";

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
  providers: [
    InvoiceDispatchersService,
    InvoiceSelectorsService
  ]
})
export class InvoicingModule { }
