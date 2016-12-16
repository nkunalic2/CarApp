import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StepTwoComponent} from "./step-two/step-two.component";
import {StepThreeComponent} from "./step-three/step-three.component";
import {StepOneComponent} from "./step-one/step-one.component";
import {SignupService} from "./signup.service";
import {SharedModule} from "../shared/shared.module";
import { SignupComponent } from './signup.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    FormsModule
  ],
  declarations: [SignupComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  providers: [SignupService]
})
export class SignupModule { }
