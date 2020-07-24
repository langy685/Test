import { TestBed } from '@angular/core/testing';

import { InvoiceSelectorsService } from './invoice-selectors.service';

describe('InvoiceSelectorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceSelectorsService = TestBed.get(InvoiceSelectorsService);
    expect(service).toBeTruthy();
  });
});
