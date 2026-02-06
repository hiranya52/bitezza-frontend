import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { UserProfileComponent } from "../../components/user-profile/user-profile.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ProductFilterComponent } from "../../components/product-filter/product-filter.component";

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, UserProfileComponent, HeaderComponent, ProductFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
