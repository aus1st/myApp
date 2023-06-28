import { Component } from '@angular/core';
import { Login } from 'src/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: Login = {
    email: '',
    password: ''
  }

  submit() {
    console.log(this.form)
  }

}
