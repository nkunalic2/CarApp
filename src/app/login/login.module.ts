import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {Routes, RouterModule, Route} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  exports:      [ LoginComponent ]
})
export class LoginModule { }
