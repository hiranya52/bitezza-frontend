import { Component } from '@angular/core';
import { ViewService } from '../../view/view.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  currentView: string = 'newOrder'; // default active

  constructor(private viewService: ViewService) {}

  setView(view: string) {
    this.currentView = view;        // <-- update active view locally
    this.viewService.changeView(view); // <-- notify the service
  }

}
