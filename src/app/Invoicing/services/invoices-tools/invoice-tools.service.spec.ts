import { TestBed } from '@angular/core/testing';

import { InvoiceToolsService } from './invoice-tools.service';

describe('InvoiceToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceToolsService = TestBed.get(InvoiceToolsService);
    expect(service).toBeTruthy();
  });
});
