import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  getAllProducts(){
    return this.http.get(API_ENDPOINTS.product.getAll);
  }

  getProduct(){
    return this.http.get(API_ENDPOINTS.product.getProduct);
  }

}
