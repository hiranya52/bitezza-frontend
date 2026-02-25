import { order } from './../../../model/order.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getLastOrderId(): Observable<number>{
    return this.http.get<number>(API_ENDPOINTS.order.getLastOrderId);
  }


  addOrder( order: order ): Observable<order>{
    return this.http.post<order>(API_ENDPOINTS.order.add,order);
  }

  getAllOrders(): Observable<order[]>{
    return this.http.get<order[]>(API_ENDPOINTS.order.getAll);
  }

}
