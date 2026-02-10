import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementAddProductComponent } from './menu-management-add-product.component';

describe('MenuManagementAddProductComponent', () => {
  let component: MenuManagementAddProductComponent;
  let fixture: ComponentFixture<MenuManagementAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManagementAddProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
