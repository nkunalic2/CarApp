import {Component, Input} from '@angular/core';
import {SignupService} from "../../signup/signup.service";
import {FormGroup} from "@angular/forms";
import {DataService} from "./data.service";
import {Http} from "@angular/http";



@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-dropdown.component.html'
})



export class NgSelectComponent {
  @Input() countriesData: any;
  @Input() formName:FormGroup;
  @Input() controlName:any;
  countries: {};
  // selectedOption=this.countriesData[0];
  stepTwoForm: FormGroup;
  constructor(private signupService: SignupService, private dataService:DataService, public http: Http){
  }
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
    //calling http get from data service to get countries
    // console.log('data',this.countriesData);
    // this.callService();

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
