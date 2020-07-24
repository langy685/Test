import { Injectable } from '@angular/core';

import {Store} from "@ngrx/store";

import {Invoice} from "../../models/invoice";
import {State} from "../invoice-state";

import * as invoiceActions from "../actions/invoice-actions"

@Injectable({
  providedIn: 'root'
})
export class InvoiceDispatchersService {
  constructor(private store: Store<State>) { }

  setInvoiceToAdd(invoice:Invoice) {
    this.store.dispatch(invoiceActions.invoiceAdded({invoice}))
  }

  setSearchedText(text:string) {
    this.store.dispatch(invoiceActions.invoiceSearched({text}))
  }
}
