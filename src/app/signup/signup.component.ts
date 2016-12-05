import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {SignupService} from "./signup.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // currentStep=1;
  numberOfSteps=3;
  _signUpForm:FormGroup;
  value: Date;

  currentStep:number;

  constructor( private signupService: SignupService) { }

  ngOnInit() {
  //   this.signUpForm = this.formBuilder.group({
  //    title: new FormControl(''),
  //    progress: new FormControl('')
  //   });
    this._signUpForm=this.signupService.signUpForm;
    this.currentStep=this.signupService.getStep();
   }

}
