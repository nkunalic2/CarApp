import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { SharedComponent } from './shared.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgInputComponent} from "./ng-input/ng-input.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgDatepickerComponent} from "./ng-datepicker/ng-datepicker.component";
import {DatepickerModule, CollapseModule, ModalModule} from "ng2-bootstrap";
import {NgSelectComponent} from "./ng-select/ng-dropdown.component";

// import {SelectModule} from "angular2-select";
import {FancyImageUploaderModule} from "ng2-fancy-image-uploader";
import {NgTextareaComponent} from "./ng-textarea/ng-textarea.component";
import {NgAvatarComponent} from "./ng-avatar/ng-avatar.component";
import {FileUploaderComponent} from "./ng-fileupload/ng-fileupload.component";
import {NgRadioButtonComponent} from "./ng-radiobutton/ng-radiobutton.component";
import {DataService} from "./ng-select/data.service";
import {DropdownModule} from "ng2-dropdown";
import {CollapseDemoComponent} from "./ng-collapse/ng-collapse.component";
import {ModalDemoComponent} from "./ng-modal/ng-modal.component";
import {SingleDemoComponent} from "./ng-list/ng-list.component";
import { SelectModule} from "ng2-select";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    NgbModule,
    SelectModule,
    FancyImageUploaderModule,
    DropdownModule,
    CollapseModule,
    ModalModule
  ],
  declarations: [SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent, NgTextareaComponent, NgAvatarComponent, NgRadioButtonComponent, CollapseDemoComponent, ModalDemoComponent, SingleDemoComponent ],
  exports:[SharedComponent, NgInputComponent, NgDatepickerComponent, NgSelectComponent ,NgTextareaComponent, NgAvatarComponent, NgRadioButtonComponent, CollapseDemoComponent, ModalDemoComponent, SingleDemoComponent],
  providers:[DatePipe, DataService]
})
export class SharedModule { }
