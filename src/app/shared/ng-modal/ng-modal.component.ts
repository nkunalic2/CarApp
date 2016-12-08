/**
 * Created by nadinak on 12/8/2016.
 */
import {Component, ViewChild, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {FormGroup} from "@angular/forms";

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
  ngOnInit(){
    console.log('cijela', this.formName);
    this.stepOneForm=<FormGroup>this.formName.controls['stepOneForm'];
    this.stepTwoForm=<FormGroup>this.formName.controls['stepTwoForm'];
    this.stepThreeForm=<FormGroup>this.formName.controls['stepThreeForm'];
    this.marriageForm=<FormGroup>this.stepThreeForm.controls['marriageForm'];
  }

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
