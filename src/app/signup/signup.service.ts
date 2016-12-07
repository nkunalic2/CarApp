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
      })

    });

    // this.stepOneForm=this.formBuilder.group({
    // //here goes the form for first step
    //   firstName: new FormControl(''),
    //   lastName: new FormControl('')
    // });
    // this.stepTwoForm=this.formBuilder.group({
    //   //here goes the form for second step
    // });
    // this.stepThreeForm=this.formBuilder.group({
    //   //here goes the form for third step
    // });
    // this.stepFourForm=this.formBuilder.group({
    //   //here goes the form for fourth step
    // });
  }
  setStep(step:number){
    this.currentStep=step;
  }
  getStep(){
    return this.currentStep;
  }
  }



