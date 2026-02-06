import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { UserProfileComponent } from "../../components/user-profile/user-profile.component";

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, UserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
