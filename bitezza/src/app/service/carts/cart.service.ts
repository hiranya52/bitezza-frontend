import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartProduct } from '../../../model/cartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient ) { }

  private cartIems:cartProduct[] = [];


  addToCart( product: cartProduct ) {
    this.cartIems.push(product);
    console.log(product);

  }

  getCartItems() {
    return this.cartIems;
  }


}
