import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderColumnHeaderComponent } from './order-column-header.component';

describe('OrderColumnHeaderComponent', () => {
  let component: OrderColumnHeaderComponent;
  let fixture: ComponentFixture<OrderColumnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderColumnHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
