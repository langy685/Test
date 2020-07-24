import {Component, OnDestroy, OnInit} from '@angular/core';
import {Invoice, InvoiceState} from "../../models/invoice";
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
    for (let i = 1; i <= 500; i++) {
      this.invoices.push(this.createInvoice(i, this.randomString()));
    }
    this.invoiceManagerService.invoicesStateChanged(this.getInvoicesState());
  }

  private randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }

  private randomString() {
    return Math.random().toString(36).substring(5);
  }

  private getInvoicesState(): InvoiceState {
    let paid = this.invoices.filter(inv => inv.price > 0.5 && inv.visible).length;
    let unpaid = this.invoices.filter(inv => inv.price <= 0.5 && inv.visible).length;
    return {paid, unpaid};
  }

  private subscribeToInvoiceAdded() {
    this.subs.sink = this.invoiceManagerService.invoiceAdded$.subscribe(
      invoiceName => {
        if (invoiceName !== '') {
          this.invoices.splice(0, 0, this.createInvoice(this.invoices.length + 1, invoiceName))
          this.buildItemIndexes();
          this.invoiceManagerService.invoicesStateChanged(this.getInvoicesState());
        }
      }
    )
  }

  private buildItemIndexes() {
    let newInvoicesArr: Invoice[] = [];
    for (let i = 0; i < this.invoices.length; i++) {
      newInvoicesArr.push({...this.invoices[i], index: i+1});
    }
    this.invoices = newInvoicesArr;
  }

  private invoiceVisibilityChanged() {
    this.invoiceManagerService.invoicesStateChanged(this.getInvoicesState());
  }

  private createInvoice(index: number, name: string): Invoice {
    return ({index, name, price: this.randomNumber(0, 1), visible: true}) as Invoice;
  }

}
