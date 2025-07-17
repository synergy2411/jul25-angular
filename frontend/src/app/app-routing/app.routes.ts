import { Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { ExpensesComponent } from '../components/expenses/expenses.component';
import { PipeExampleComponent } from '../components/demo/pipe-example/pipe-example.component';
import { ObservableExampleComponent } from '../components/demo/observable-example/observable-example.component';
import { LoginGuard } from '../services/guards/login.guard';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductsComponent } from '../modules/products/components/products/products.component';
import { OverviewComponent } from '../modules/products/components/products/overview/overview.component';
import { SpecificationComponent } from '../modules/products/components/products/specification/specification.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
    outlet: 'second',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
    // outlet: 'primary',
  },
  {
    path: 'register',
    component: RegisterComponent,
    outlet: 'second',
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'pipe',
    component: PipeExampleComponent,
  },
  {
    path: 'observable',
    component: ObservableExampleComponent,
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('../modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**', // if above path does not match
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
