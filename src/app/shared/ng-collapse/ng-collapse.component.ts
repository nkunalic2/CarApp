/**
 * Created by nadinak on 12/7/2016.
 */
import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SignupService} from "../../signup/signup.service";



@Component({
  selector: 'collapse-demo',
  templateUrl: './ng-collapse.component.html'
})
export class CollapseDemoComponent {
  @Input() formName: FormGroup;
  @Input() data:any;
  stepThree: FormGroup;
  marriageF : FormGroup;

  public isCollapsed:boolean = false;

  constructor(private signupService: SignupService){
    this.stepThree=<FormGroup>this.signupService.signUpForm.controls['stepThreeForm'];
    this.marriageF=<FormGroup>this.stepThree.controls['marriageForm'];
  }
  ngOnChanges(...args: any[]) {
    console.log('onChange fired');
    console.log('changing', args);
  }
ngOnInit(){
  // console.log('aaa', this.data[1]);
}
  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
}
