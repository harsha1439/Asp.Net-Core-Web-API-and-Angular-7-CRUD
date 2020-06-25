import { TestBed } from '@angular/core/testing';

import { Payment.ServiceService } from './payment.service.service';

describe('Payment.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Payment.ServiceService = TestBed.get(Payment.ServiceService);
    expect(service).toBeTruthy();
  });
});
