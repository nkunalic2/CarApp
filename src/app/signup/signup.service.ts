/**
 * Created by nadinak on 11/23/2016.
 */
import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";


@Injectable()

export class SignupService{
  currentStep=1;
  signUpForm:FormGroup;
  // stepOneForm:FormGroup;
  stepTwoForm:FormGroup;
  stepThreeForm:FormGroup;
  stepFourForm:FormGroup;
  marriageTime:any;

  constructor(private formBuilder:FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      title: new FormControl(''),
      progress: new FormControl(''),
      stepOneForm: new FormGroup({
        firstName: new FormControl('', [<any> Validators.required]),
        lastName: new FormControl('', [<any> Validators.required]),
        email: new FormControl('', [<any> Validators.required]),
        password: new FormControl('', [<any> Validators.required]),
        privacyAgreement: new FormControl('', [<any> Validators.required])
      }),
      stepTwoForm: new FormGroup({
        birthDay: new FormControl(''),
        birthPlace: new FormControl(''),
        profilePic: new FormControl('http://2.bp.blogspot.com/-KLcHPORC4do/TbJCkjjkiBI/AAAAAAAAACw/zDnMSWC_R0M/w1200-h630-p-nu/facebook-no-image1.gif'),
        comment:new FormControl(''),
      }),
      stepThreeForm:new FormGroup({
        birthTime: new FormControl(''),
       source: new FormControl(''),
        marriageForm:new FormGroup({
          firstName: new FormControl('', [<any> Validators.required]),
          birthDay: new FormControl(''),
         time: new FormControl('')
        })

      })

    });

  }
  setStep(step:number){
    this.currentStep=step;
  }
  getStep(){
    return this.currentStep;
  }
  setMarriage(time:string){
    this.marriageTime=time;
  }
  getMarriage(){
    return this.marriageTime;
  }
  }



