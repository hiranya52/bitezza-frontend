import { OrderItem } from './../../../model/order-item.model';
import { order } from './../../../model/order.model';
import { CartService } from './../../service/carts/cart.service';
import { cartProduct } from './../../../model/CartProduct.model';
import { Component, inject, OnInit } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartProductList: cartProduct[] = [];

  orderProductList: OrderItem[] = [];

  private cart = inject(CartService);

  activeServiceType: string = 'Dine In';

  setServiceType(type: string) {
    this.activeServiceType = type;
    console.log(type);

  }

  ngOnInit(): void {
    this.cartProductList = this.cart.getCartItems();
    console.log(this.cartProductList);
  }

  clearAll() {
    this.cartProductList.length = 0;
  }

  getSubTotal() {
    let total = 0;

    for (let i = 0; i < this.cartProductList.length; i++) {
      total += this.cartProductList[i].price * this.cartProductList[i].qty;
    }
    return total;
  }

  getServiceFee() {
    let total = this.getSubTotal();
    return total / 100 * 5;
  }

  getTotalPayable() {
    return this.getSubTotal() + this.getServiceFee();
  }

  addorderProductList() {

    this.cartProductList.forEach(element => {

        const orderItem: OrderItem = {
          productId: element.productId,
          quantity: element.qty,
          price: element.price
        }

        this.orderProductList.push(orderItem);

      });
  }

  addOrder() {

    


  }

}
