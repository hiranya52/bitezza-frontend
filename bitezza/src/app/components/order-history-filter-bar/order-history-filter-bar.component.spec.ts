import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryFilterBarComponent } from './order-history-filter-bar.component';

describe('OrderHistoryFilterBarComponent', () => {
  let component: OrderHistoryFilterBarComponent;
  let fixture: ComponentFixture<OrderHistoryFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryFilterBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
