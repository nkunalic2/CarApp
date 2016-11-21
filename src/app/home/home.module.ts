import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {Routes, RouterModule, Route} from '@angular/router'

import {DashboardComponent} from "../dashboard/dashboard.component";
import {MyCarsComponent} from "../cars/my-cars/my-cars.component";
import { NavbarModule } from "./../navbar/navbar.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule
  ],
  declarations: [HomeComponent, DashboardComponent, MyCarsComponent]

})
export class HomeModule { }
