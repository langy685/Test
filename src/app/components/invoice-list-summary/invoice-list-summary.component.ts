import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceManagerService} from "../../services/invoice-manager.service";

import {SubSink} from "subsink";

@Component({
  selector: 'app-invoice-list-summary',
  templateUrl: './invoice-list-summary.component.html',
  styleUrls: ['./invoice-list-summary.component.scss']
})
export class InvoiceListSummaryComponent implements OnInit, OnDestroy {

  paidCount:number;
  unpaidCount:number;

  private subs = new SubSink();

  constructor(private invoiceManagerService:InvoiceManagerService) { }

  ngOnInit() {
    this.subscribeToInvoiceState();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private subscribeToInvoiceState() {
    this.invoiceManagerService.invoicesState$.subscribe(
      state => {
        this.paidCount = state.paid;
        this.unpaidCount = state.unpaid;
      }
    )
  }

}
