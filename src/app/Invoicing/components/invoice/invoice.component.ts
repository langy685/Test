import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Invoice} from "../../models/invoice";
import {SubSink} from "subsink";
import {InvoiceManagerService} from "../../../services/invoice-manager.service";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, OnDestroy {

  @Input() invoice:Invoice;
  @Output() visibleChanged = new EventEmitter();

  subs = new SubSink();

  constructor(private invoiceManagerService: InvoiceManagerService) { }

  ngOnInit() {
    this.subscribeToInvoiceSearch();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private subscribeToInvoiceSearch() {
    this.subs.sink = this.invoiceManagerService.invoiceSearch$.subscribe(
      invoiceName => {
        this.invoice.visible = this.invoice.name.includes(invoiceName);
        this.visibleChanged.emit();
      }
    )
  }

  private isInvoicePaid() {
    return this.invoice.price > 0.5 && this.invoice.visible;
  }

}
