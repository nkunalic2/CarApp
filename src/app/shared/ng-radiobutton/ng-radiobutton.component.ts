/**
 * Created by nadinak on 12/6/2016.
 */

import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-ng-radiobutton',
  templateUrl: './ng-radiobutton.component.html',
  styles: [],
  inputs:[]
})
export class  NgRadioButtonComponent {
  gen:string;

  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];

  constructor (){


  }

  ngOnInit(){

  }
  show(){

  }



}






