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
import {FancyImageUploaderModule} from "ng2-fancy-image-uploader";
import {NgUploaderComponent} from "./ng-imauploader.component";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    NgbModule,
    SelectModule,
    FancyImageUploaderModule
  ],
  declarations: [SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent, NgUploaderComponent],
  exports:[SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent, NgUploaderComponent]
})
export class SharedModule { }
