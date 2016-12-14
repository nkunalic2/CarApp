/**
 * Created by nadinak on 12/6/2016.
 */

import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {SignupService} from "../../signup/signup.service";


@Component({
  selector: 'app-ng-radiobutton',
  templateUrl: './ng-radiobutton.component.html',
  styles: [],
  inputs:[],

})
export class  NgRadioButtonComponent {
  gen:string;
  stepThreeForm: FormGroup;

  s="A";
  public var1 = [
    { value: 'A', display: 'Internet' },
    { value: 'B', display: 'Educational institution' },
    { value: 'C', display: 'Co-worker' },
    { value: 'D', display: 'Other' }
  ];
 public var2 =[
  { value: 'C', display: 'Co-worker' },
  { value: 'D', display: 'Other' }
];
  constructor (private signupService: SignupService){
    this.stepThreeForm=<FormGroup>this.signupService.signUpForm.controls['stepThreeForm'];
  }
  ngOnInit(){

  }
  show(){

  }

  refresh(v:string){
    this.s=v;
  }



}






