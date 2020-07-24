import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from "../../models/invoice";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @Input() invoice:Invoice;

  constructor() { }

  ngOnInit() {
  }

}
