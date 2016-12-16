import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

import {SignupService} from "../signup.service";

/* defining interface for options array */
interface Option {
  name: string;
}

@Component({
  selector: 'app-step-three',
  templateUrl: 'step-three.component.html',
  styleUrls: ['step-three.component.css']
})

export class StepThreeComponent implements OnInit {
  stepThreeForm: FormGroup;
  currentStep= 3;
  /* this is a nested form in step 3 form which is displaying if user opted that he is married */
  marriageForm: FormGroup;
  signupForm:FormGroup;
  //options for marriage duration
  options: Option []=[
    {name:'Less then a year'},
    {name:'1-5 years'},
    {name:'More then 5 years'}
  ];

  constructor(private singupService: SignupService, private router: Router) {
  }

  ngOnInit() {
    this.signupForm=<FormGroup>this.singupService.signUpForm;
    this.stepThreeForm=<FormGroup>this.singupService.signUpForm.controls['stepThreeForm'];
    /* setting current step for the progress bar */
    this.singupService.setStep(this.currentStep);
    this.marriageForm=<FormGroup>this.stepThreeForm.controls['marriageForm'];
  }

  //navigating to previous step
  previousForm() {
    this.router.navigate(["signup/step2"]);
  }

}
