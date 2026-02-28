import { OrderService } from './../../service/orders/order.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { order } from './../../../model/order.model';
import { Component, inject, Input } from '@angular/core';
import { OrderColumnHeaderComponent } from '../order-column-header/order-column-header.component';

@Component({
  selector: 'app-cooking-order-card',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './cooking-order-card.component.html',
  styleUrl: './cooking-order-card.component.css'
})
export class CookingOrderCardComponent {

  @Input() order!: order

  private orderService = inject(OrderService);
  private orderColumn = inject(OrderColumnHeaderComponent);

  markAsReady(orderId: number){
    this.orderService.updateOrderStatus(orderId).subscribe( res =>{
      this.orderColumn.getAllOrders();
    })
  }

}
