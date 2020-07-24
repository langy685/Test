import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {StoreModule} from "@ngrx/store";

import {AddInvoiceComponent} from "./components/add-invoice/add-invoice.component";
import {InvoiceListSearchComponent} from "./components/invoice-list-search/invoice-list-search.component";
import {InvoicingComponent} from "./components/invoicing/invoicing.component";
import {InvoiceListComponent} from "./components/invoice-list/invoice-list.component";
import {InvoiceListSummaryComponent} from "./components/invoice-list-summary/invoice-list-summary.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import { routes } from './invoicing-routes';
import {InvoiceDispatchersService} from "./state/services/invoice-dispatchers.service";
import {InvoiceManagerService} from "./services/invoice-manager/invoice-manager.service";
import {InvoiceSelectorsService} from "./state/services/invoice-selectors.service";
import {invoicesReducer} from "./state/reducers/invoice.reducer";
import {InvoiceToolsService} from "./services/invoices-tools/invoice-tools.service";

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('invoices',
      {
        invoices: invoicesReducer,
      }),
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
    InvoiceToolsService,
    InvoiceManagerService,
    InvoiceDispatchersService,
    InvoiceSelectorsService
  ]
})
export class InvoicingModule { }
