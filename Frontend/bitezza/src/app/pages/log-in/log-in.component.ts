import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../service/users/user.service';


@Component({
  selector: 'app-log-in',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  userForm: FormGroup
  private userService = inject(UserService);

  constructor(
    formBuider: FormBuilder
  ){

    this.userForm = formBuider.group({
      username: [''],
      password: ['']
    })

  }


  onSubmit(){

    const user = this.userForm.value;

    this.userService.getUser(user.username).subscribe( res => {
      if(res != null){
        if( res.password == user.password ){
          
        }
      }
    })


  }



}
