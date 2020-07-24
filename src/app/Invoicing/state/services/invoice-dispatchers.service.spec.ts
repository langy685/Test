import { TestBed } from '@angular/core/testing';

import { InvoiceDispatchersService } from './invoice-dispatchers.service';

describe('InvoiceDispatchersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceDispatchersService = TestBed.get(InvoiceDispatchersService);
    expect(service).toBeTruthy();
  });
});
