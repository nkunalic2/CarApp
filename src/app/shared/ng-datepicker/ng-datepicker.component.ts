import {Component, Input} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {SignupService} from "../../signup/signup.service";
import {FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-ng-datepicker',
  templateUrl: './ng-datepicker.component.html',
  styles: [`
    .custom-day {      
      text-align: center;
      padding: 0.185rem 0.25rem;
      border-radius: 0.25rem;
      display: inline-block;
      width: 2rem;
    }
    .custom-day:hover {
      background-color: #e6e6e6;
    }
    .weekend {
      background-color: #fffcb4;
      border-radius: 1rem;
      color: black;
    }
    .hidden {
      display: none;
    }
  `],
  inputs:['controlName', 'formName']
})
export class  NgDatepickerComponent {
  model: NgbDateStruct;
  stepTwoForm: FormGroup;
  newDate:Date;
  constructor(private signupService: SignupService, private datePipe: DatePipe){
  }

  ngOnInit() {
    this.stepTwoForm=<FormGroup>this.signupService.signUpForm.controls['stepTwoForm'];
  }

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

}
