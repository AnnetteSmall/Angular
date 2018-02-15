import { TestBed, inject } from '@angular/core/testing';

import { TradeMarketingService } from './trade-marketing.service';

describe('TradeMarketingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeMarketingService]
    });
  });

  it('should be created', inject([TradeMarketingService], (service: TradeMarketingService) => {
    expect(service).toBeTruthy();
  }));
});
