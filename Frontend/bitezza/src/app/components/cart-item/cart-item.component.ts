import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CartService } from '../../service/carts/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() product: any

  private cart = inject(CartService);

  increaseQty(){
    this.product.qty++;
  }

  decreaseQty(){
    if(this.product.qty>1){
      this.product.qty--;
    }
  }

  deleteItem(){
    this.cart.deleteItem(this.product);
  }

}
