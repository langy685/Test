import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InvoiceManagerService} from "../../services/invoice-manager.service";
import { SubSink} from "subsink";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-invoice-list-search',
  templateUrl: './invoice-list-search.component.html',
  styleUrls: ['./invoice-list-search.component.scss']
})
export class InvoiceListSearchComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;
  subs = new SubSink();

  constructor(
    private invoiceManagerService: InvoiceManagerService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToSearch();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private initForm() {
    this.searchForm = this.formBuilder.group({
      search: '',
    })
  }

  private subscribeToSearch() {
    this.subs.sink = this.searchForm.controls['search'].valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
    ).subscribe(
      text => {
        this.invoiceManagerService.invoiceSearch(text);
      }
    )
  }

}
