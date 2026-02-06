import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { AsyncPipe, NgIf } from '@angular/common';
import { NewOrderComponent } from "../../components/new-order/new-order.component";
import { ViewService } from '../../view/view.service';
import { Observable } from 'rxjs';
import { UserProfileComponent } from "../../components/user-profile/user-profile.component";
import { LiveTrackingComponent } from "../../components/live-tracking/live-tracking.component";

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, NgIf, AsyncPipe, NewOrderComponent, UserProfileComponent, LiveTrackingComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentView$!: Observable<string>;

  constructor(private viewService: ViewService) {
    this.currentView$ = this.viewService.currentView$;
  }

}
