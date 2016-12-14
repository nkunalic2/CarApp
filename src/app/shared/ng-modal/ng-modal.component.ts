/**
 * Created by nadinak on 12/8/2016.
 */
import {Component, ViewChild, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {FormGroup} from "@angular/forms";

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
  selected:any;
  countries: {};

  constructor(private signupService: SignupService, private dataService:DataService){}

  ngOnInit(){
    this.stepOneForm=<FormGroup>this.formName.controls['stepOneForm'];
    this.stepTwoForm=<FormGroup>this.formName.controls['stepTwoForm'];
    this.stepThreeForm=<FormGroup>this.formName.controls['stepThreeForm'];
    this.marriageForm=<FormGroup>this.stepThreeForm.controls['marriageForm'];
    this.selected=this.marriageForm.value.time;
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

  public show(){
    console.log(this.signupService.signUpForm);
  }
}
