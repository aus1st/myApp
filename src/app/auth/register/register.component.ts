import { Component } from '@angular/core';
import { Register } from 'src/models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: Register = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  submit() {
    console.log(this.form)
  }
}
