import { order } from './../../../model/order.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preparing-order-card',
  imports: [],
  templateUrl: './preparing-order-card.component.html',
  styleUrl: './preparing-order-card.component.css'
})
export class PreparingOrderCardComponent {

  @Input() order!: order;

}
