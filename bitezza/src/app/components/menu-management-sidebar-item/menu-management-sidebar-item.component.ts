import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-management-sidebar-item',
  imports: [CommonModule],
  templateUrl: './menu-management-sidebar-item.component.html',
  styleUrl: './menu-management-sidebar-item.component.css'
})
export class MenuManagementSidebarItemComponent {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() active: boolean = false;
  @Input() href: string = '#';

}
