import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryPaginationComponent } from './order-history-pagination.component';

describe('OrderHistoryPaginationComponent', () => {
  let component: OrderHistoryPaginationComponent;
  let fixture: ComponentFixture<OrderHistoryPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
