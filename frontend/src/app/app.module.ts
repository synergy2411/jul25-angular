import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { DirectiveExampleComponent } from './components/demo/directive-example/directive-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserService } from './services/user.service';
import { CounterOneComponent } from './components/demo/counter/counter-one/counter-one.component';
import { CounterTwoComponent } from './components/demo/counter/counter-two/counter-two.component';
import { CounterService } from './services/counter.service';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';
import { ResponseInterceptor } from './services/interceptors/response.interceptor';
import { GlobalErrorHandlerService } from './services/errors/global-error-handler.service';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/demo/products/products.component';
import { OverviewComponent } from './components/demo/products/overview/overview.component';
import { SpecificationComponent } from './components/demo/products/specification/specification.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    LifeCycleComponent,
    DirectiveExampleComponent,
    HighlightDirective,
    PipeExampleComponent,
    CountryCodePipe,
    ReversePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    CounterOneComponent,
    CounterTwoComponent,
    ObservableExampleComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    ExpenseFormComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent,
  ],
  imports: [
    // Modules - built-in, custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    { provide: CounterService, useClass: CounterService },
    // UserService,
    // {provide : UserService, useClass: UserService}
  ], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
