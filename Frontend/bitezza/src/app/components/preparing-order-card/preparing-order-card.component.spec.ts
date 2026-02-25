import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingOrderCardComponent } from './preparing-order-card.component';

describe('PreparingOrderCardComponent', () => {
  let component: PreparingOrderCardComponent;
  let fixture: ComponentFixture<PreparingOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparingOrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparingOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
