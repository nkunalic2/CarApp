/**
 * Created by nadinak on 11/23/2016.
 */
import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";


@Injectable()

export class SignupService{
  signUpForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      title: new FormControl(''),
      progress: new FormControl('')
    });
  }
  }




