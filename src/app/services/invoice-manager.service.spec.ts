import { TestBed } from '@angular/core/testing';

import { InvoiceManagerService } from './invoice-manager.service';

describe('InvoiceManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceManagerService = TestBed.get(InvoiceManagerService);
    expect(service).toBeTruthy();
  });
});
