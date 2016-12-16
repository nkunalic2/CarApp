import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {SignupService} from "../signup.service";


@Component({
  selector: 'app-step-one',
  templateUrl: 'step-one.component.html',
  styleUrls: ['step-one.component.css']
})

export class StepOneComponent implements OnInit {
  stepOneForm: FormGroup;
  currentStep= 1;
  /* if not validated is set to true - error (validation) message is being displayed */
  notValidated = false;

  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
    /* setting current step for the progress bar */
    this.signupService.setStep(this.currentStep);
  }

  //navigating to next step if form is validated
  submitForm() {
    if(this.stepOneForm.valid) {
      this.notValidated = false;
      this.router.navigate(["signup/step2"]);
    }
    else {
      //setting notValidated to true which will display error validation msg.
      //user is not able to go to next step until the form is validated
      this.notValidated = true;
    }
  }

}
