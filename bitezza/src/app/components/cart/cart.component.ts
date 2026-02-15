import { CartService } from './../../service/carts/cart.service';
import { cartProduct } from './../../../model/CartProduct.model';
import { Component, inject, OnInit } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartProductList: cartProduct[] = [];

  private cart = inject(CartService);

  ngOnInit(): void {
    this.cartProductList = this.cart.getCartItems();
    console.log(this.cartProductList);

  }

}
