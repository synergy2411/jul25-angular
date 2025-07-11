import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(loginForm: NgForm) {
    // console.log(loginForm);
    console.log('Email : ', loginForm.value.email);
    console.log('Password : ', loginForm.value.password);
  }
}
