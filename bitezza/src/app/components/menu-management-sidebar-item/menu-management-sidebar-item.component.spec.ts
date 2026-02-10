import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementSidebarItemComponent } from './menu-management-sidebar-item.component';

describe('MenuManagementSidebarItemComponent', () => {
  let component: MenuManagementSidebarItemComponent;
  let fixture: ComponentFixture<MenuManagementSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManagementSidebarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
