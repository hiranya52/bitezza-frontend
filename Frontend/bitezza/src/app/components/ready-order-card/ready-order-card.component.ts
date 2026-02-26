import { order } from './../../../model/order.model';
import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-ready-order-card',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './ready-order-card.component.html',
  styleUrl: './ready-order-card.component.css'
})
export class ReadyOrderCardComponent {

  @Input() order!: order;

}
