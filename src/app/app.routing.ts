import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CarComponent} from './cars/car/car.component';
import {SignupComponent} from './signup/signup.component';
import {StepTwoComponent} from './signup/step-two/step-two.component';
import {StepThreeComponent} from './signup/step-three/step-three.component';
import {StepOneComponent} from './signup/step-one/step-one.component';


export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'car/:id', component: CarComponent},
  { path: 'signup', component: SignupComponent,
    children: [
      { path: '', component: StepOneComponent },
      { path: 'step1', component: StepOneComponent },
      { path: 'step2', component: StepTwoComponent },
      { path: 'step3', component: StepThreeComponent}
    ]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
