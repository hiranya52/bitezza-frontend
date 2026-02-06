import { Component } from '@angular/core';
import { ViewService } from '../../view/view.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private viewService: ViewService) {}

  setView(view: string) {
    this.viewService.changeView(view);
  }

}
