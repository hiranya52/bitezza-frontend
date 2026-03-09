import { order } from './../../../model/order.model';
import { Component, Input } from '@angular/core';
import { FinishedOrderCardComponent } from "../finished-order-card/finished-order-card.component";

@Component({
  selector: 'app-order-history-orders-table',
  imports: [FinishedOrderCardComponent],
  templateUrl: './order-history-orders-table.component.html',
  styleUrl: './order-history-orders-table.component.css'
})
export class OrderHistoryOrdersTableComponent {

  @Input() order!: order;

}
