import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup} from "@angular/forms";

import {Router} from "@angular/router";


@Component({
  selector: 'app-step-one',
  templateUrl: 'step-one.component.html',
  styleUrls: ['step-one.component.css']
})
export class StepOneComponent implements OnInit {
  stepOneForm: FormGroup;
  currentStep= 1;
  notValidated = false;
  constructor(private signupService: SignupService, private router: Router) {

  }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
    this.signupService.setStep(this.currentStep);

  }

  submitForm(){
    //navigating to next step if form is validated
    if(this.stepOneForm.valid) {
      this.notValidated = false;
    this.router.navigate(["signup/step2"]);
    }
    else{

      this.notValidated = true;
    }
  }

}
