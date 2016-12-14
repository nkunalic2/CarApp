import {Component, OnInit, Input} from '@angular/core';
import {SignupService} from "../signup/signup.service";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
  inputs:['bootstrap', 'type', 'placeholder', 'name', 'controlName']
})
export class SharedComponent implements OnInit {
  stepOneForm: FormGroup;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
    console.log('b',this.stepOneForm.controls['privacyAgreement'].valueOf());
  }

}
