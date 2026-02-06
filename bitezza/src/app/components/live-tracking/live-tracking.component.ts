import { Component } from '@angular/core';
import { LiveTrackerHeaderComponent } from "../live-tracker-header/live-tracker-header.component";
import { PageTitleComponent } from "../page-title/page-title.component";

@Component({
  selector: 'app-live-tracking',
  imports: [LiveTrackerHeaderComponent, PageTitleComponent],
  templateUrl: './live-tracking.component.html',
  styleUrl: './live-tracking.component.css'
})
export class LiveTrackingComponent {

}
