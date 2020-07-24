import {Component, OnDestroy, OnInit} from '@angular/core';
import {Invoice} from "../../models/invoice";
import {InvoiceManagerService} from "../../services/invoice-manager.service";
import {SubSink} from "subsink";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit, OnDestroy {

  invoices: Invoice[] = [];

  private subs = new SubSink();

  constructor(private invoiceManagerService: InvoiceManagerService) {
  }

  ngOnInit() {
    this.initInvoices();
    this.subscribeToInvoiceAdded();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private initInvoices() {
    for(let i=1;i<=300;i++) {
      this.invoices.push(this.createInvoice(i, this.randomString()));
    }
  }

  private randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  private randomString() {
    let str = Math.random().toString(36).substring(5);
    return str;
  }

  private subscribeToInvoiceAdded() {
    this.subs.sink = this.invoiceManagerService.invoiceAdded$.subscribe(
      invoiceName => {
        this.invoices.push(this.createInvoice(this.invoices.length + 1, invoiceName))
      }
    )
  }

  private createInvoice(index:number, name: string): Invoice {
    return ({index, name, price:this.randomNumber(0,1)}) as Invoice;
  }

}
