import { Component } from '@angular/core';
import { OrderColumnHeaderComponent } from "../order-column-header/order-column-header.component";
import { OrderHistoryHeaderComponent } from "../order-history-header/order-history-header.component";
import { OrderHistoryPageStatsComponent } from "../order-history-page-stats/order-history-page-stats.component";

@Component({
  selector: 'app-order-history',
  imports: [OrderColumnHeaderComponent, OrderHistoryHeaderComponent, OrderHistoryPageStatsComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

}
