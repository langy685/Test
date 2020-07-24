import { Injectable } from '@angular/core';

import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceManagerService {

  private invoiceAddedSubject = new BehaviorSubject<string>('');
  invoiceAdded$ = this.invoiceAddedSubject.asObservable();

  private invoiceSearchSubject = new BehaviorSubject<string>('');
  invoiceSearch$ = this.invoiceSearchSubject.asObservable();

  constructor() { }

  invoiceAdded(text:string) {
    this.invoiceAddedSubject.next(text);
  }

  invoiceSearch(text:string) {
    this.invoiceSearchSubject.next(text);
  }
}
