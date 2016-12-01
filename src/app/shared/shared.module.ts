import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgInputComponent} from "./ng-input/ng-input.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbdDatepickerCustomday} from "./ng-datepicker/ng-datepicker.component";
import {DatepickerModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    NgbModule
  ],
  declarations: [SharedComponent, NgInputComponent, NgbdDatepickerCustomday],
  exports:[SharedComponent, NgInputComponent, NgbdDatepickerCustomday]
})
export class SharedModule { }
