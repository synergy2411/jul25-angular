import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onSubmit(loginForm: NgForm) {
    // console.log(loginForm);
    console.log('Email : ', loginForm.value.email);
    console.log('Password : ', loginForm.value.password);

    this.authService.loginUser(loginForm.value.email, loginForm.value.password);
  }
}
