import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-two',
  templateUrl: 'step-two.component.html',
  styleUrls: ['step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  stepTwoForm: FormGroup;
  constructor(private _signupService: SignupService, private router: Router) { }

  ngOnInit() {
    this.stepTwoForm=<FormGroup>this._signupService.signUpForm.controls['stepTwoForm'];
    console.log('two', this.stepTwoForm);
  }

  previousForm(){
    this.router.navigate(["signup/step1"]);
  }

}
