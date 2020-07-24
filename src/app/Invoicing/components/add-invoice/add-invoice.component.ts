import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {InvoiceManagerService} from "../../../services/invoice-manager.service";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  invoiceForm: FormGroup;

  constructor(private invoiceManager: InvoiceManagerService,
              private formBuilder: FormBuilder)
  { }

  ngOnInit() {
    this.initForm();
  }

  addInvoice() {
    this.invoiceManager.invoiceAdded(this.invoiceForm.value.name);
  }

  private initForm() {
    this.invoiceForm = this.formBuilder.group({
      name:'',
    })
  }

}
