import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedOrderCardComponent } from './finished-order-card.component';

describe('FinishedOrderCardComponent', () => {
  let component: FinishedOrderCardComponent;
  let fixture: ComponentFixture<FinishedOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedOrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
