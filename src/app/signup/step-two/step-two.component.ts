import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup} from "@angular/forms";
import {SignupDataService} from "../signup-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-two',
  templateUrl: 'step-two.component.html',
  styleUrls: ['step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  name:string;
  stepOneForm: FormGroup;
  constructor(private _signupService: SignupService, private _signupDataService:SignupDataService, private router: Router) { }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this._signupService.signUpForm.controls['stepOneForm'];
    this.name=this._signupDataService.getFirstName();
    console.log('ee', this.stepOneForm);
  }

  previousForm(){
    this.router.navigate(["signup/step1"]);
  }

}
