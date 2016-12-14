import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import {StepTwoComponent} from "./step-two/step-two.component";
import {StepThreeComponent} from "./step-three/step-three.component";
import {StepFourComponent} from "./step-four/step-four.component";
import {StepOneComponent} from "./step-one/step-one.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {SignupService} from "./signup.service";
import {SharedModule} from "../shared/shared.module";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";











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
    StepThreeComponent,
    StepFourComponent

  ],
  providers: [SignupService]
})
export class SignupModule { }
