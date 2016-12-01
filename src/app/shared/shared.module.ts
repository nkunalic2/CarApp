import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgInputComponent} from "./ng-input/ng-input.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgDatepickerComponent} from "./ng-datepicker/ng-datepicker.component";
import {DatepickerModule} from "ng2-bootstrap";
import {NgSelectComponent} from "./ng-select/ng-dropdown.component";

import {SelectModule} from "angular2-select";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    NgbModule,
    SelectModule
  ],
  declarations: [SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent],
  exports:[SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent]
})
export class SharedModule { }
