import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { order } from './../../../model/order.model';
import { OrderService } from '../../service/orders/order.service';
import { PreparingOrderCardComponent } from "../preparing-order-card/preparing-order-card.component";
import { CookingOrderCardComponent } from "../cooking-order-card/cooking-order-card.component";
import { ReadyOrderCardComponent } from "../ready-order-card/ready-order-card.component";

@Component({
  selector: 'app-order-column-header',
  imports: [CommonModule, NgIf, PreparingOrderCardComponent, CookingOrderCardComponent, ReadyOrderCardComponent],
  templateUrl: './order-column-header.component.html',
  styleUrl: './order-column-header.component.css'
})
export class OrderColumnHeaderComponent implements OnInit{

  private orderService = inject(OrderService);

  orderList: order [] = [];

  ngOnInit(): void {

    this.getAllOrders();
    console.log(this.getAllOrders());

  }

  getAllOrders(){
    this.orderService.getAllOrders().subscribe( res => {
      this.orderList = res;
    })
  }


}
