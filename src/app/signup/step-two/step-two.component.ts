import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../shared/ng-select/data.service";

@Component({
  selector: 'app-step-two',
  templateUrl: 'step-two.component.html',
  styleUrls: ['step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  stepTwoForm: FormGroup;
  currentStep= 2;
  countries: {};
  constructor(private _signupService: SignupService, private router: Router, private dataService:DataService) { }

  ngOnInit() {
    this.stepTwoForm=<FormGroup>this._signupService.signUpForm.controls['stepTwoForm'];
    this._signupService.setStep(this.currentStep);
    console.log('two', this.stepTwoForm);
    this.callService();
  }

  previousForm(){
    this.router.navigate(["signup/step1"]);
  }
  submitForm(){
    console.log('two', this.stepTwoForm);
    //navigating to next step
    this.router.navigate(["signup/step3"]);
  }

  //method for calling service where countries will be fatched
  callService(){
    this.dataService.getData().subscribe(
      res =>this.countries =(res) ,
      err => this.logError(err),  () => console.log('Random Quote Complete')

    );

  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

}
