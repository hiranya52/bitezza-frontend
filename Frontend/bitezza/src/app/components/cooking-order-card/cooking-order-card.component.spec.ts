import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingOrderCardComponent } from './cooking-order-card.component';

describe('CookingOrderCardComponent', () => {
  let component: CookingOrderCardComponent;
  let fixture: ComponentFixture<CookingOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingOrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
