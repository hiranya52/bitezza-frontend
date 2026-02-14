import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient ) { }

  private cartIems:any[] = [];


  addToCart( product: any ) {
    this.cartIems.push(product);
  }



}
