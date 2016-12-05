import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-three',
  templateUrl: 'step-three.component.html',
  styleUrls: ['step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  constructor(private singupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  previousForm(){
    this.router.navigate(["signup/step2"]);
  }
}
