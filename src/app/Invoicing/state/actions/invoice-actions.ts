import { createAction, props } from '@ngrx/store';

import {Invoice} from "../../models/invoice";

export const invoiceAdded = createAction('[Invoice.InvoiceAdded] Invoice added',
  props<{ invoice: Invoice }>());

export const invoiceSearched = createAction('[Invoice.InvoiceSearched] Invoice searched',
  props<{ text: string }>());
