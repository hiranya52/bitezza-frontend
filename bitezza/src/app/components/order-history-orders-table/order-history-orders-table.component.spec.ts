import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryOrdersTableComponent } from './order-history-orders-table.component';

describe('OrderHistoryOrdersTableComponent', () => {
  let component: OrderHistoryOrdersTableComponent;
  let fixture: ComponentFixture<OrderHistoryOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryOrdersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
