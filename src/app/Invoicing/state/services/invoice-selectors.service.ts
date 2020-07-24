import { Injectable } from '@angular/core';

import {createFeatureSelector, createSelector, Store} from "@ngrx/store";

import {Observable} from "rxjs";

import {Invoice} from "../../models/invoice";
import {State} from "../invoice-state";

// feature selector
const selectInvoicesFeature = createFeatureSelector<State>('invoices');

// invoice selectors
const selectInvoiceToAdd = createSelector(
  selectInvoicesFeature,
  state => state.invoices.invoiceToAdd
);

const selectSearchedText = createSelector(
  selectInvoicesFeature,
  state => state.invoices.searchedText
);


@Injectable({
  providedIn: 'root'
})
export class InvoiceSelectorsService {

  constructor(private store: Store<State>,) { }

  get invoiceToAdd$(): Observable<Invoice> {
    return this.store.select(selectInvoiceToAdd);
  }

  get searchedText$(): Observable<string> {
    return this.store.select(selectSearchedText);
  }
}
