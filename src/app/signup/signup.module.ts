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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [SignupComponent,
    SignupWizardStep1Component,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent],
  providers: [SignupService]
})
export class SignupModule { }
