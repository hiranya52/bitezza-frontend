import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementPanelFooterComponent } from './menu-management-panel-footer.component';

describe('MenuManagementPanelFooterComponent', () => {
  let component: MenuManagementPanelFooterComponent;
  let fixture: ComponentFixture<MenuManagementPanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManagementPanelFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
