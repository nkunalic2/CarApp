import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

interface Option {
  name: string;
  value: string;
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
  checkboxValue: boolean;
  signupForm:FormGroup;
  options: Option []=[
    {name:'Less then a year', value:'first'},
    {name:'1-5 years', value:'second'},
    {name:'More then 5 years', value:'third'}
  ];
  // options:[
  //   {name:"Less then a year"},
  //   {name:"1-5 years"},
  //   {name:"More then 5 years"}
  //   ];
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
    // console.log(this.stepThreeForm.controls['source']);
    this.router.navigate(["signup/step2"]);
  }
  addProp(e){
    // if(this.checkboxValue==false){
    //    this.checkboxValue=true;
    // }
    // else{
    //   this.checkboxValue=false;
    // }

  }

  submitForm(){
    this.router.navigate(["signup/step4"])
    // console.log('3',this.stepThreeForm);
  }
}
