import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartProduct } from '../../../model/CartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient ) { }

  private cartIems:cartProduct[] = [];


  addToCart( product: cartProduct ) {

   let existingItem: cartProduct | undefined = undefined;

  for (let i = 0; i < this.cartIems.length; i++) {
    if (this.cartIems[i].name === product.name) {
      existingItem = this.cartIems[i];
      break;
    }
  }

  if (existingItem) {
    existingItem.qty++;
  } else {
    this.cartIems.push({
      ...product,
      qty: 1
    });
  }

  }

  getCartItems() {
    return this.cartIems;
  }


}
