import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup} from "@angular/forms";

import {NgInputComponent} from "../../shared/ng-input/ng-input.component";
import {Router} from "@angular/router";
import {SignupDataService} from "../signup-data.service";

@Component({
  selector: 'app-step-one',
  templateUrl: 'step-one.component.html',
  styleUrls: ['step-one.component.css']
})
export class StepOneComponent implements OnInit {
  stepOneForm: FormGroup;
  constructor(private signupService: SignupService, private router: Router, private _signupDataService: SignupDataService) { }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
  }

  submitForm(){
    console.log('c',this.stepOneForm);
    //Saving data to a service if user decides to come back to this step
    this._signupDataService.setStepOne("nadina");
    //navigating to next step
    this.router.navigate(["signup/step2"]);
  }

}
