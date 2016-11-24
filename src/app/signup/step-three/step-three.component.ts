import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-step-three',
  templateUrl: 'step-three.component.html',
  styleUrls: ['step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  constructor(private singupService: SignupService) { }

  ngOnInit() {
  }

}
