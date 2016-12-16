/**
 * Created by nadinak on 11/23/2016.
 */
/*** This service stores the whole signup form with nested step 1-3 forms ***/
import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import { CustomValidators } from 'ng2-validation';

@Injectable()

export class SignupService{
  /* setting start of signup wizzard to step 1 */
  currentStep=1;
  signUpForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      title: new FormControl(''),
      progress: new FormControl(''),
      stepOneForm: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', [<any> Validators.required]),
        email: new FormControl('', [CustomValidators.email, Validators.required]),
        password: new FormControl('', [<any> Validators.required]),
        privacyAgreement: new FormControl('true', [<any> Validators.required])
      }),
      stepTwoForm: new FormGroup({
        birthDay: new FormControl('', Validators.required),
        birthPlace: new FormControl('', Validators.required),
        profilePic: new FormControl('http://2.bp.blogspot.com/-KLcHPORC4do/TbJCkjjkiBI/AAAAAAAAACw/zDnMSWC_R0M/w1200-h630-p-nu/facebook-no-image1.gif'),
        comment:new FormControl(''),
      }),
      stepThreeForm:new FormGroup({
       source: new FormControl(''),
        marriageForm:new FormGroup({
          firstName: new FormControl('', [<any> Validators.required]),
          birthDay: new FormControl(''),
          time: new FormControl('')
        })
      })
    });

  }

  /* this method is called when current step component is being initialised */
  /** updating step for the progress bar **/
  setStep(step:number){
    this.currentStep=step;
  }
  /* this method is called from the signup component */
  /** for displaying the step in the progress bar **/
  getStep(){
    return this.currentStep;
  }

  }



