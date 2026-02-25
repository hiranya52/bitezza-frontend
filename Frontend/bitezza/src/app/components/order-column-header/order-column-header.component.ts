import { Component, inject } from '@angular/core';
import { OrderService } from '../../service/orders/order.service';

@Component({
  selector: 'app-order-column-header',
  imports: [],
  templateUrl: './order-column-header.component.html',
  styleUrl: './order-column-header.component.css'
})
export class OrderColumnHeaderComponent {

  private orderService = inject(OrderService);

}
