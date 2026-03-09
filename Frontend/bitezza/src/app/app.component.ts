import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "./components/toast/toast.component";
import { LogInComponent } from "./pages/log-in/log-in.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent, LogInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bitezza';
}
