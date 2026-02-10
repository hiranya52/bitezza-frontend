import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementAddProductPanelComponent } from './menu-management-add-product-panel.component';

describe('MenuManagementAddProductPanelComponent', () => {
  let component: MenuManagementAddProductPanelComponent;
  let fixture: ComponentFixture<MenuManagementAddProductPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManagementAddProductPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementAddProductPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
