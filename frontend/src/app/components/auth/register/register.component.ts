import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        RegisterComponent.exclamationValidator,
      ]),
      cnfPassword: new FormControl(),
    });
  }

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get cnfPassword() {
    return this.registerForm.get('cnfPassword') as FormControl;
  }

  onSubmit() {
    console.log('Username : ', this.registerForm.value.username);
    console.log('Password : ', this.registerForm.value.password);
  }

  // Custom Validator Function for checking Exclamation Sign
  static exclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    console.log(control);
    const hasExclamation = control.value.indexOf('!');
    if (hasExclamation >= 0) {
      return null;
    } else {
      return { exclamation: true };
    }
  }
}
