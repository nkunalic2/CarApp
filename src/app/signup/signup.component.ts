import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {SignupService} from "./signup.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

/* root component for step 1, step 2 and step 3 component */
export class SignupComponent implements OnInit {
 //nubmer of steps for the progress bar
  numberOfSteps=3;
  _signUpForm:FormGroup;

  constructor( private signupService: SignupService) { }

  ngOnInit() {
  // retireving signUp form from service
    this._signUpForm=this.signupService.signUpForm;
   }

   // retrieving current step for the progress bar
   getStep() {
     return this.signupService.getStep();
   }
}
