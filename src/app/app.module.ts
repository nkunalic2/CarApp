import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {CarModule} from './cars/car/car.module';

import { routes } from './app.routing';
import {UserService} from './user/user.service';
import {NavbarModule} from './navbar/navbar.module';
import {SignupModule} from './signup/signup.module';
import {AlertModule} from 'ng2-bootstrap';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    CarModule,
    routes,
    NavbarModule,
    SignupModule,
    AlertModule,
    NgbModule.forRoot(),
    SharedModule
  ],

  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {

  }


