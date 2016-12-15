import {Component, Input} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-ng-datepicker',
  templateUrl: './ng-datepicker.component.html',
  styles: [``]
})
export class  NgDatepickerComponent {
  @Input() formName: FormGroup;
  @Input() controlName: any;
  @Input() notValidated: boolean;
  constructor(){
  }

  ngOnInit() {
  }

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

}
