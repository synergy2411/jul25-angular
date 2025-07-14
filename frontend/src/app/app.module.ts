import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    // Modules - built-in, custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CounterService,
    // UserService,
    // {provide : UserService, useClass: UserService}
  ], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
