import { Component } from '@angular/core';
import { MenuManagementImageUploadComponent } from "../menu-management-image-upload/menu-management-image-upload.component";
import { MenuManagementProductFormComponent } from "../menu-management-product-form/menu-management-product-form.component";

@Component({
  selector: 'app-menu-management-add-product-panel',
  imports: [MenuManagementImageUploadComponent, MenuManagementProductFormComponent],
  templateUrl: './menu-management-add-product-panel.component.html',
  styleUrl: './menu-management-add-product-panel.component.css'
})
export class MenuManagementAddProductPanelComponent {

  close() {
    // later you can emit an event here
    console.log('close panel');
  }

}
