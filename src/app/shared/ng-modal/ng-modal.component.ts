/**
 * Created by nadinak on 12/8/2016.
 */
import {Component, ViewChild, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {FormGroup, FormControl} from "@angular/forms";
import {SignupService} from "../../signup/signup.service";
import {DataService} from "../ng-select/data.service";

@Component({
  selector: 'modal-demo',
  templateUrl: './ng-modal.component.html',
  styleUrls: ['./ng-modal.component.css']
})
export class ModalDemoComponent {
  @Input() formName: FormGroup;
  @Input() options: any;
  @ViewChild('childModal') public childModal:ModalDirective;
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;
  marriageForm: FormGroup;
  married:boolean=false;
  time:any;
  birthDay:any;
  selected:any;
  hey:any;
  countries: {};
  constructor(private signupService: SignupService, private dataService:DataService){

  }
  ngOnChanges(...args: any[]) {
    console.log('onChange fired');
    console.log('changing', args);
  }
  ngOnInit(){

    this.stepOneForm=<FormGroup>this.formName.controls['stepOneForm'];
    this.stepTwoForm=<FormGroup>this.formName.controls['stepTwoForm'];
    // this.stepThreeForm=<FormGroup>this.signupService.signUpForm.controls['stepThreeForm'];
    // this.marriageForm=<FormGroup>this.stepThreeForm.controls['marriageForm'];
    this.stepThreeForm=<FormGroup>this.formName.controls['stepThreeForm'];
    this.marriageForm=<FormGroup>this.stepThreeForm.controls['marriageForm'];
    console.log('meri', this.marriageForm);
    this.time=this.marriageForm.controls['time'];
    this.birthDay=this.marriageForm.controls['birthDay'];
    this.selected=this.marriageForm.value.time;


     console.log('meridz',this.signupService.getMarriage());
this.callService();
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

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  public getMarriageStatus(){
   return this.signupService.getMarriage();
  }
}
