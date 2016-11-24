import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-one',
  templateUrl: 'step-one.component.html',
  styleUrls: ['step-one.component.css']
})
export class StepOneComponent implements OnInit {
  stepOneForm: FormGroup;
  constructor(private signupService: SignupService) { }

  ngOnInit() {
     // this.stepOneForm=this.signupService.signUpForm.controls['stepOneForm'].value;
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
    // console.log('a',this.stepOneForm);
  }

}
