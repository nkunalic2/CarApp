/**
 * Created by nadinak on 11/28/2016.
 */

import { Injectable } from '@angular/core';



@Injectable()

export class SignupDataService{


    firstName:string;
    lastName:string;
    email:string;
    password:string;


  constructor(

  ) {

  }

  setStepOne(_firstName:string){
    this.firstName=_firstName;

  }

  getFirstName(){
    return this.firstName;
  }

  }




