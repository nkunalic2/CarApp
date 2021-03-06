import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SignupService} from "../../signup/signup.service";

@Component({
  selector: 'app-ng-input',
  templateUrl: 'ng-input.component.html',
  styleUrls: ['ng-input.component.css'],
  inputs:['bootstrap', 'type', 'placeholder', 'name', 'controlName', 'notValidated']
})
export class NgInputComponent implements OnInit {
  @Input() formName: FormGroup;
  stepOneForm: FormGroup;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
    console.log('b',this.stepOneForm.controls['privacyAgreement'].valueOf());
  }

}
