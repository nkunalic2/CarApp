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


  private selectedDataName: string;
  private selectedData: any;

  countries: {};
  // selectedOption=this.countriesData[0];
  stepTwoForm: FormGroup;
  constructor(private signupService: SignupService, private dataService:DataService, public http: Http){
  }
  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
    // this.selectedData = this.formName.controls[this.controlName];
    //calling http get from data service to get countries
    // console.log('data',this.countriesData);
    // this.callService();

    console.log('datab',JSON.stringify(this.countriesData));
  }

  private onDataSelected(event) {
    // this.selectedObject = JSON.parse(event);
    //
    // console.log( this.formName.controls[this.controlName]);
    //  this.selectedData = this.formName.controls[this.controlName];
  // console.log('data', event);
    this.selectedData=JSON.stringify(event);

    return this.selectedData;
    // this.signupService.setMarriage(this.selectedData);
    // alert(JSON.stringify(event));
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
