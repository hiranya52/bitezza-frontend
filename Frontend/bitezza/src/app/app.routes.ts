import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';

export const routes: Routes = [

  {
    path:'',
    component: LogInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

