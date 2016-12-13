/**
 * Created by nadinak on 12/9/2016.
 */
import {Component, Input, Optional} from '@angular/core';
import {FormGroup, FormControl, Form} from "@angular/forms";
import {DataService} from "../ng-select/data.service";



@Component({
  selector: 'single-demo',
  templateUrl: './ng-list.component.html'
})
export class SingleDemoComponent {
  @Input() formName:FormGroup;
  @Input() controlName:FormControl;
  public items: any = [];
  private selectedData= this.value;


  constructor(private dataService:DataService) {

    // this.myForm.controls['id'].disable()
  }


  ngOnInit(){
    this.callService();
    // this.controlName.enable();

    console.log('formica', this.controlName);
  }
  private onDataSelected(event) {
    alert("huuu");
    this.selectedData=JSON.stringify(event);

    return this.selectedData;
  }


  //method for calling service where countries will be fatched
  callService(){
    this.dataService.getData()
      .subscribe(data => {
        data.forEach(role => {
          this.items.push(role.name);
        });
      });
    console.log('itemi',this.items);

  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;



  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
