import { order } from './../../../model/order.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ready-order-card',
  imports: [],
  templateUrl: './ready-order-card.component.html',
  styleUrl: './ready-order-card.component.css'
})
export class ReadyOrderCardComponent {

  @Input() order!: order;

}
