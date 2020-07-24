import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListSummaryComponent } from './invoice-list-summary.component';

describe('InvoiceListSummaryComponent', () => {
  let component: InvoiceListSummaryComponent;
  let fixture: ComponentFixture<InvoiceListSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceListSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
