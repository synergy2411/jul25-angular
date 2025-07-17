import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CounterOneComponent } from './components/demo/counter/counter-one/counter-one.component';
import { CounterTwoComponent } from './components/demo/counter/counter-two/counter-two.component';
import { DirectiveExampleComponent } from './components/demo/directive-example/directive-example.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductsModule } from './modules/products/products.module';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CounterService } from './services/counter.service';
import { GlobalErrorHandlerService } from './services/errors/global-error-handler.service';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';
import { ResponseInterceptor } from './services/interceptors/response.interceptor';
import { UsersComponent } from './users/users.component';
import { SharedModule } from './modules/shared/shared.module';

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
  ],
  imports: [
    // Modules - built-in, custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    AppRoutingModule, // "**"
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
