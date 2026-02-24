import { Component } from '@angular/core';
import { LiveTrackerHeaderComponent } from "../live-tracker-header/live-tracker-header.component";
import { PageTitleComponent } from "../page-title/page-title.component";
import { OrderColumnHeaderComponent } from "../order-column-header/order-column-header.component";

@Component({
  selector: 'app-live-tracking',
  imports: [LiveTrackerHeaderComponent, PageTitleComponent, OrderColumnHeaderComponent],
  templateUrl: './live-tracking.component.html',
  styleUrl: './live-tracking.component.css'
})
export class LiveTrackingComponent {

}
