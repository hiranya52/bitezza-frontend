import { Component } from '@angular/core';
import { OrderColumnHeaderComponent } from "../order-column-header/order-column-header.component";
import { OrderHistoryHeaderComponent } from "../order-history-header/order-history-header.component";
import { OrderHistoryPageStatsComponent } from "../order-history-page-stats/order-history-page-stats.component";
import { OrderHistoryFilterBarComponent } from "../order-history-filter-bar/order-history-filter-bar.component";
import { OrderHistoryOrdersTableComponent } from "../order-history-orders-table/order-history-orders-table.component";
import { OrderHistoryPaginationComponent } from "../order-history-pagination/order-history-pagination.component";
import { OrderHistorySummaryCardsComponent } from "../order-history-summary-cards/order-history-summary-cards.component";

@Component({
  selector: 'app-order-history',
  imports: [OrderHistoryHeaderComponent, OrderHistoryPageStatsComponent, OrderHistoryFilterBarComponent, OrderHistoryOrdersTableComponent, OrderHistoryPaginationComponent, OrderHistorySummaryCardsComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

}
