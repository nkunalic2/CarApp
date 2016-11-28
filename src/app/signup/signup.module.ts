import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupWizardStep1Component } from './signup-wizard-step1/signup-wizard-step1.component';
import { RouterModule } from '@angular/router';
import {StepTwoComponent} from "./step-two/step-two.component";
import {StepThreeComponent} from "./step-three/step-three.component";
import {StepFourComponent} from "./step-four/step-four.component";
import {StepOneComponent} from "./step-one/step-one.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupService} from "./signup.service";
import {NgInputComponent} from "../shared/ng-input/ng-input.component";
import {SharedModule} from "../shared/shared.module";
import {SharedComponent} from "../shared/shared.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SignupComponent,
    SignupWizardStep1Component,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    SharedComponent,
    NgInputComponent
  ],
  providers: [SignupService]
})
export class SignupModule { }
