import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }

  private viewSource = new BehaviorSubject<string>('newOrder');
  currentView$ = this.viewSource.asObservable();

  changeView(view: string) {
    this.viewSource.next(view);
  }

}
