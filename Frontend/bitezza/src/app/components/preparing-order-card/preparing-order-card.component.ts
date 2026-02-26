import { CommonModule } from '@angular/common';
import { order } from './../../../model/order.model';
import { Component, inject, Input } from '@angular/core';
import { OrderService } from '../../service/orders/order.service';

@Component({
  selector: 'app-preparing-order-card',
  imports: [CommonModule],
  templateUrl: './preparing-order-card.component.html',
  styleUrl: './preparing-order-card.component.css'
})
export class PreparingOrderCardComponent {

  @Input() order!: order;

  private orderService = inject(OrderService);

  moveToCook(orderId: number){

    this.orderService.updateOrderStatus(orderId).subscribe( res => {
      
    })

  }

}
