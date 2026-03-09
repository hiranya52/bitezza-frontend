import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-log-in',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  userForm: FormGroup

  constructor(
    formBuider: FormBuilder
  ){

    this.userForm = formBuider.group({
      username: [''],
      password: ['']
    })

  }


  onSubmit(){
    
  }



}
