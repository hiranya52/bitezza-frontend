import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementImageUploadComponent } from './menu-management-image-upload.component';

describe('MenuManagementImageUploadComponent', () => {
  let component: MenuManagementImageUploadComponent;
  let fixture: ComponentFixture<MenuManagementImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManagementImageUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
