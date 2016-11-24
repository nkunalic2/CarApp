import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-step-four',
  templateUrl: 'step-four.component.html',
  styleUrls: ['step-four.component.css']
})
export class StepFourComponent implements OnInit {

  constructor(private singupService: SignupService) { }

  ngOnInit() {
  }

}
