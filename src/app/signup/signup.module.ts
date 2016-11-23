import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupWizardStep1Component } from './signup-wizard-step1/signup-wizard-step1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SignupComponent,
    SignupWizardStep1Component]
})
export class SignupModule { }
