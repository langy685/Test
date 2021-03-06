import { Injectable } from '@angular/core';

import {BehaviorSubject} from "rxjs";

import {InvoiceState} from "../../models/invoice";

@Injectable()
export class InvoiceManagerService {

  private invoiceAddedSubject = new BehaviorSubject<string>('');
  invoiceAdded$ = this.invoiceAddedSubject.asObservable();

  private invoiceSearchSubject = new BehaviorSubject<string>('');
  invoiceSearch$ = this.invoiceSearchSubject.asObservable();

  private invoicesStateSubject = new BehaviorSubject<InvoiceState>(null);
  invoicesState$ = this.invoicesStateSubject.asObservable();

  constructor() { }

  invoiceAdded(text:string) {
    this.invoiceAddedSubject.next(text);
  }

  invoiceSearch(text:string) {
    this.invoiceSearchSubject.next(text);
  }

  invoicesStateChanged(state: InvoiceState) {
    this.invoicesStateSubject.next(state);
  }
}
