import { order } from './../../../model/order.model';
import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { OrderService } from '../../service/orders/order.service';

@Component({
  selector: 'app-ready-order-card',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './ready-order-card.component.html',
  styleUrl: './ready-order-card.component.css'
})
export class ReadyOrderCardComponent {

  @Input() order!: order;

  private orderService = inject(OrderService);

  completeOrder(orderId: number){
    this.orderService.updateOrderStatus(orderId).subscribe( res=> {
    })
  }

}
