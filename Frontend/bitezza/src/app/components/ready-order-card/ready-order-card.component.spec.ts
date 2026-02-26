import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyOrderCardComponent } from './ready-order-card.component';

describe('ReadyOrderCardComponent', () => {
  let component: ReadyOrderCardComponent;
  let fixture: ComponentFixture<ReadyOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyOrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
