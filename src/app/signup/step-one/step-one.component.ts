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
  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
  }

  submitForm(){
    //navigating to next step
    this.router.navigate(["signup/step2"]);
  }

}
