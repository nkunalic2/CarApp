import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { SharedComponent } from './shared.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgInputComponent} from "./ng-input/ng-input.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgDatepickerComponent} from "./ng-datepicker/ng-datepicker.component";
import {DatepickerModule} from "ng2-bootstrap";
import {NgSelectComponent} from "./ng-select/ng-dropdown.component";

import {SelectModule} from "angular2-select";
import {FancyImageUploaderModule} from "ng2-fancy-image-uploader";
import {NgTextareaComponent} from "./ng-textarea/ng-textarea.component";
import {NgAvatarComponent} from "./ng-avatar/ng-avatar.component";
import {FileUploaderComponent} from "./ng-fileupload/ng-fileupload.component";
import {NgRadioButtonComponent} from "./ng-radiobutton/ng-radiobutton.component";
import {DataService} from "./ng-select/data.service";
import {DropdownModule} from "ng2-dropdown";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    NgbModule,
    SelectModule,
    FancyImageUploaderModule,
    DropdownModule
  ],
  declarations: [SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent, NgTextareaComponent, NgAvatarComponent, NgRadioButtonComponent ],
  exports:[SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent ,NgTextareaComponent, NgAvatarComponent, NgRadioButtonComponent],
  providers:[DatePipe, DataService]
})
export class SharedModule { }
