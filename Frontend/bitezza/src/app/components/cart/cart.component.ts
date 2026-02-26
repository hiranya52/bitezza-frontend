import { OrderItem } from './../../../model/order-item.model';
import { order } from './../../../model/order.model';
import { CartService } from './../../service/carts/cart.service';
import { cartProduct } from './../../../model/CartProduct.model';
import { Component, inject, OnInit } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
import { OrderService } from '../../service/orders/order.service';
import { NotificationService } from '../../service/notification/notification.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(
    private toast: NotificationService
  ){}

  cartProductList: cartProduct[] = [];
  orderProductList: OrderItem[] = [];

  private cart = inject(CartService);
  private order = inject(OrderService);

  orderNumber: number = 1000;

  activeServiceType: string = 'DINE_IN';

  setServiceType(type: string) {
    this.activeServiceType = type;

  }

  ngOnInit(): void {
    this.cartProductList = this.cart.getCartItems();
    this.setNewOrderId();
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
          productName: element.name,
          quantity: element.qty,
          price: element.price
        }
        this.orderProductList.push(orderItem);

      });

  }

  addOrder() {

    this.addorderProductList();

    const newOrder: order = {
      orderId: 1000,
      orderStatus: 'PREPARING',
      serviceType: this.activeServiceType,
      totalValue: this.getTotalPayable(),
      items: this.orderProductList
    };

    this.order.addOrder(newOrder).subscribe( res => {
      if(res != null){
        this.toast.show('Order Confirmed!');
        this.setNewOrderId();
        // Clear Fields
        this.cartProductList.length = 0;
        this.activeServiceType = 'DINE_IN';
      }
    })
  }

  setNewOrderId(){
    this.order.getLastOrderId().subscribe( res => {
      this.orderNumber = ++res;
    })
  }

}
