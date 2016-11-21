import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NavbarModule} from "../../navbar/navbar.module";
import {CarCommentsComponent} from "../car-comments/car-comments.component";


@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CarComponent, CarCommentsComponent]

})
export class CarModule { }
