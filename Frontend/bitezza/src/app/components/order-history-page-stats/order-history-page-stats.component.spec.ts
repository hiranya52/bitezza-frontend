import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryPageStatsComponent } from './order-history-page-stats.component';

describe('OrderHistoryPageStatsComponent', () => {
  let component: OrderHistoryPageStatsComponent;
  let fixture: ComponentFixture<OrderHistoryPageStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryPageStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryPageStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
