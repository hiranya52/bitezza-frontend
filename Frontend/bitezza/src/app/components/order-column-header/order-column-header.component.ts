import { order } from './../../../model/order.model';
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

  orderList: order [] = [];

  getAllOrders(){
    this.orderService.getAllOrders().subscribe( res => {
      this.orderList = res;
    })
  }


}
