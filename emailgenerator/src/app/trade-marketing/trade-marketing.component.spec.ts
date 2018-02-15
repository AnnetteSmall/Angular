import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMarketingComponent } from './trade-marketing.component';

describe('TradeMarketingComponent', () => {
  let component: TradeMarketingComponent;
  let fixture: ComponentFixture<TradeMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
