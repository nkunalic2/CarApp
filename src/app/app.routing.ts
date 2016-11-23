import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule, Route} from '@angular/router'

import {AppComponent} from './app.component'

import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CarComponent} from "./cars/car/car.component";
import {SignupComponent} from "./signup/signup.component";
import { SignupWizardStep1Component } from "./signup/signup-wizard-step1/signup-wizard-step1.component";

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'car/:id', component:CarComponent},
  {path: 'signup',
    component: SignupComponent,
    children: [
      { path: '', component: SignupWizardStep1Component },
      { path: 'page1', component: SignupWizardStep1Component }
    ]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
