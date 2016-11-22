import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginModule} from "./login/login.module";
import {HomeModule} from "./home/home.module";
import {CarModule} from "./cars/car/car.module";

import { routes } from './app.routing';
import {UserService} from "./user/user.service";
import {NavbarModule} from "./navbar/navbar.module";
import {SignupModule} from "./signup/signup.module";


@NgModule({
  declarations: [
    AppComponent,
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
    SignupModule
  ],

  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {

  }


