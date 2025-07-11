import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    console.log('Username : ', this.registerForm.value.username);
    console.log('Password : ', this.registerForm.value.password);
  }
}
