import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrackerHeaderComponent } from './live-tracker-header.component';

describe('LiveTrackerHeaderComponent', () => {
  let component: LiveTrackerHeaderComponent;
  let fixture: ComponentFixture<LiveTrackerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveTrackerHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveTrackerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
