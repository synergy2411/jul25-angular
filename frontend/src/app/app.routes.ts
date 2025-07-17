import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';
import { LoginGuard } from './services/guards/login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/demo/products/products.component';
import { OverviewComponent } from './components/demo/products/overview/overview.component';
import { SpecificationComponent } from './components/demo/products/specification/specification.component';

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
    path: 'products', // http://localhost:4200/products
    component: ProductsComponent,
    children: [
      {
        path: ':productId/:productName/overview',
        component: OverviewComponent,
        children: [
          { path: 'specification', component: SpecificationComponent },
        ],
      }, // http://localhost:4200/products/productId/productName/overview/specification
    ],
  },
  {
    path: '**', // if above path does not match
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
