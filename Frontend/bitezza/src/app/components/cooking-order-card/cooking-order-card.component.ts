import { CommonModule, NgFor, NgIf } from '@angular/common';
import { order } from './../../../model/order.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cooking-order-card',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './cooking-order-card.component.html',
  styleUrl: './cooking-order-card.component.css'
})
export class CookingOrderCardComponent {

  @Input() order!: order

}
