import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          RegisterComponent.exclamationValidator,
        ]),
        cnfPassword: new FormControl(
          '',
          RegisterComponent.confirmPasswordValidatorWithControl
        ),
        hobbies: new FormArray([]),
      }
      // {
      //   validators: RegisterComponent.confirmPasswordValidatorWithForm,
      // }
    );
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

  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }

  addNewHobby() {
    this.hobbies.push(
      new FormGroup({
        name: new FormControl(),
        frequency: new FormControl(),
      })
    );
  }

  deleteHobby(i: number) {
    this.hobbies.removeAt(i);
  }

  onSubmit() {
    console.log(this.registerForm);
    console.log('Username : ', this.registerForm.value.username);
    console.log('Password : ', this.registerForm.value.password);
  }

  // Custom Validator Function for checking Exclamation Sign
  static exclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!');
    if (hasExclamation >= 0) {
      return null;
    } else {
      return { exclamation: true };
    }
  }

  static confirmPasswordValidatorWithForm(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const cnfPassword = control.get('cnfPassword');
    if (password && cnfPassword) {
      if (password.value !== cnfPassword.value) {
        return { passwordMismatch: true };
      }
    }
    return null;
  }

  static confirmPasswordValidatorWithControl(control: any) {
    if (control && control.parent) {
      if (control.value !== control.parent.controls['password'].value) {
        return { passwordMismatch: true };
      }
    }
    return null;
  }
}
