/**
 * Created by nadinak on 12/7/2016.
 */
import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";



@Component({
  selector: 'collapse-demo',
  templateUrl: './ng-collapse.component.html'
})
export class CollapseDemoComponent {
  @Input() formName: FormGroup;
  @Input() data:any;


  public isCollapsed:boolean = false;

  constructor(){

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
