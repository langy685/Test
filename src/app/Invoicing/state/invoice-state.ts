import {Invoice} from "../models/invoice";

export interface State {
  invoices: InvoicesState;
}

export const initialInvoicesState: State =
  {
    invoices: {
      invoiceToAdd: null,
      searchedText: '',
    }
  }


export interface InvoicesState {
  invoiceToAdd: Invoice;
  searchedText: string;
}
