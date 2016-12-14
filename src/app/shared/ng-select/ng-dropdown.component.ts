import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Http} from "@angular/http";

import {SignupService} from "../../signup/signup.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-dropdown.component.html'
})



export class NgSelectComponent {
  @Input() countriesData: any;
  @Input() formName:FormGroup;
  @Input() controlName:any;

  private selectedData: any;

  countries: {};
  stepTwoForm: FormGroup;
  constructor(private signupService: SignupService, private dataService:DataService, public http: Http){
  }
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
    console.log('datab',JSON.stringify(this.countriesData));
  }

  private onDataSelected(event) {
    this.selectedData=JSON.stringify(event);
    return this.selectedData;
  }

  callService(){
    this.dataService.getData().subscribe(
      res =>this.countries =(res) ,
      err => this.logError(err),  () => console.log('Random Quote Complete')

    );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  updateOption(e){

  }

}
