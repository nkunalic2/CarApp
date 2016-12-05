/**
 * Created by nadinak on 12/2/2016.
 */
import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SignupService} from "../../signup/signup.service";

@Component({
  selector: 'app-ng-textarea',
  templateUrl: 'ng-textarea.component.html',
  styleUrls: [],
  inputs:['controlName', 'formName']
})
export class NgTextareaComponent implements OnInit {
  stepTwoForm: FormGroup;
  constructor(private signupService: SignupService) { }
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
  }

}
