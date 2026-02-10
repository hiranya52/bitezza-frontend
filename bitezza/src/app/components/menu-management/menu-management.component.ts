import { Component } from '@angular/core';
import { MenuManagementSidebarItemComponent } from "../menu-management-sidebar-item/menu-management-sidebar-item.component";

interface SidebarLink {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-menu-management',
  standalone: true,
  imports: [MenuManagementSidebarItemComponent],
  templateUrl: './menu-management.component.html',
  styleUrl: './menu-management.component.css'
})

export class MenuManagementComponent {

  links: SidebarLink[] = [
    { icon: 'dashboard', label: 'Dashboard', href: '#' },
    { icon: 'shopping_bag', label: 'Orders', href: '#' },
    { icon: 'restaurant_menu', label: 'Menu Management', href: '#', active: true },
    { icon: 'inventory_2', label: 'Inventory', href: '#' },
    { icon: 'analytics', label: 'Reports', href: '#' },
  ];

  settingsLink: SidebarLink = {
    icon: 'settings',
    label: 'Settings',
    href: '#'
  };

}
