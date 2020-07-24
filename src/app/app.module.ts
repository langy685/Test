import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContainerNavComponent } from './components/container-nav/container-nav.component';
import {InvoicingModule} from "./Invoicing/invoicing.module";
import {InvoicingComponent} from "./components/invoicing/invoicing.component";
import { InvoiceListSearchComponent } from './components/invoice-list-search/invoice-list-search.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceListSummaryComponent } from './components/invoice-list-summary/invoice-list-summary.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    WelcomeComponent,
    ContainerNavComponent,
    InvoicingComponent,
    InvoiceListSearchComponent,
    InvoiceListComponent,
    InvoiceListSummaryComponent,
    AddInvoiceComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
