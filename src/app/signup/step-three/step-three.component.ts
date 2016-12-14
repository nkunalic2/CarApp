import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

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
  marriageForm: FormGroup;
  signupForm:FormGroup;
  //options for marriage time
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
    this.singupService.setStep(this.currentStep);
    this.marriageForm=<FormGroup>this.stepThreeForm.controls['marriageForm'];
    console.log('condata',this.options);
  }
  previousForm(){
    // navigating to previous step;
    this.router.navigate(["signup/step2"]);
  }
  addProp(e){
  }
}
