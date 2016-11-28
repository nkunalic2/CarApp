import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-input',
  templateUrl: 'ng-input.component.html',
  styleUrls: ['ng-input.component.css'],
  inputs:['bootstrap', 'type', 'placeholder', 'name', 'formKontrola']
})
export class NgInputComponent implements OnInit {
  bootstrap:string;
  type:string;
  placeholder:string;
  name:string;
  formKontrola:string;

  constructor() { }

  ngOnInit() {

  }

}
