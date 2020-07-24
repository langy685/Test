export interface Invoice {
  name: string;
  price: number;
  index: number;
  visible: boolean;
}

export interface InvoiceState {
  paid: number;
  unpaid: number;
}
