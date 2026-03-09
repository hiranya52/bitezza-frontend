import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../../model/user.model';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser( username: string): Observable<user>{

    return this.http.get<user>(API_ENDPOINTS.user.getUser+encodeURIComponent(username));

  }



}
