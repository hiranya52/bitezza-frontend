import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistorySummaryCardsComponent } from './order-history-summary-cards.component';

describe('OrderHistorySummaryCardsComponent', () => {
  let component: OrderHistorySummaryCardsComponent;
  let fixture: ComponentFixture<OrderHistorySummaryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistorySummaryCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistorySummaryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
