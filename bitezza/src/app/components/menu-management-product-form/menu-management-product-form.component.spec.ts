import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementProductFormComponent } from './menu-management-product-form.component';

describe('MenuManagementProductFormComponent', () => {
  let component: MenuManagementProductFormComponent;
  let fixture: ComponentFixture<MenuManagementProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManagementProductFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
