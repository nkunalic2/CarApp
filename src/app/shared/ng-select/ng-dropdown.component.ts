import { Component } from '@angular/core';
import {SignupService} from "../../signup/signup.service";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-dropdown.component.html',
  inputs:['controlName', 'formName']
})
export class NgSelectComponent {
  options = [
    {
      value: 'a',
      label: 'Alpha'
    },
    {
      value: 'b',
      label: 'Beta'
    },
    {
      value: 'c',
      label: 'Gamma'
    }
  ];
  stepTwoForm: FormGroup;
  constructor(private signupService: SignupService){
  }
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
  }
}
