import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-list-summary',
  templateUrl: './invoice-list-summary.component.html',
  styleUrls: ['./invoice-list-summary.component.scss']
})
export class InvoiceListSummaryComponent implements OnInit {

  paidCount:number;
  unpaidCount:number;

  constructor() { }

  ngOnInit() {
  }

}
