import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-step-two',
  templateUrl: 'step-two.component.html',
  styleUrls: ['step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  constructor(private singupService: SignupService) { }

  ngOnInit() {

  }

}
