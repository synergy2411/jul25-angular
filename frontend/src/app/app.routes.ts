import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
  },
  {
    path: 'pipe',
    component: PipeExampleComponent,
  },
  {
    path: 'observable',
    component: ObservableExampleComponent,
  },
];
