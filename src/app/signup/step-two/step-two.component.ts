import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

import {SignupService} from "../signup.service";
import {DataService} from "../../shared/ng-select/data.service";

@Component({
  selector: 'app-step-two',
  templateUrl: 'step-two.component.html',
  styleUrls: ['step-two.component.css']
})

export class StepTwoComponent implements OnInit {
  stepTwoForm: FormGroup;
  currentStep= 2;
  /* array for birthplace dropdown - data will be fetched via service */
  countries: {};
  /* if not validated is set to true - error (validation) message is being displayed */
  notValidated=false;

  constructor(private _signupService: SignupService, private router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this.stepTwoForm=<FormGroup>this._signupService.signUpForm.controls['stepTwoForm'];
    /* setting current step for the progress bar */
    this._signupService.setStep(this.currentStep);
    /* calling method for retrieving countries data from service */
    this.callService();
  }

  //navigating to previous step
  previousForm(){
    this.router.navigate(["signup/step1"]);
  }

  //navigating to next step if form is validated
  submitForm(){
    console.log('two', this.stepTwoForm);
    //navigating to next step
    if(this.stepTwoForm.valid) {
      this.notValidated = false;
    this.router.navigate(["signup/step3"]);
    }
    else {
      //setting notValidated to true which will display error validation msg.
      //user is not able to go to next step until the form is validated
      this.notValidated = true;
    }
  }

  //method for calling service where countries will be fatched
  callService(){
    this._dataService.getData().subscribe(
      res =>this.countries =(res) ,
      err => this.logError(err),  () => console.log('Random Quote Complete')

    );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

}
