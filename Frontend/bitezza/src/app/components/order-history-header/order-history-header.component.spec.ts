import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryHeaderComponent } from './order-history-header.component';

describe('OrderHistoryHeaderComponent', () => {
  let component: OrderHistoryHeaderComponent;
  let fixture: ComponentFixture<OrderHistoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
