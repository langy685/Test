import {Action, createReducer, on} from "@ngrx/store";

import {initialInvoicesState, InvoicesState} from "../invoice-state";
import * as invoiceActions from "../actions/invoice-actions";

const reducer = createReducer(
  initialInvoicesState.invoices,

  on(invoiceActions.invoiceAdded,
    (state, action) => ({...state, invoiceToAdd: action.invoice})
  ),

  on(invoiceActions.invoiceSearched,
    (state, action) => ({...state, searchedText: action.text}))
)

export function productsReducer(state: InvoicesState | undefined, action: Action) {
  return reducer(state, action);
}
