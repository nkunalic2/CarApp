import {Component, OnInit, Input} from '@angular/core';
import {SignupService} from "../signup/signup.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
  inputs:['bootstrap', 'type', 'placeholder', 'name', 'controlName']
})
export class SharedComponent implements OnInit {
  // @Input() bootstraptest:string;
  // @Input() typetest:string;
  // @Input() placeholdertest:string;
  // @Input() nametest:string;
  // @Input() formKontrolatest:string;
  stepOneForm: FormGroup;
  // @Input() test: string;
  constructor(private signupService: SignupService) { }

  ngOnInit() {
    this.stepOneForm=<FormGroup>this.signupService.signUpForm.controls['stepOneForm'];
    console.log('b',this.stepOneForm.controls['privacyAgreement'].valueOf());
    // this.signupService.signUpForm.controls['stepOneForm']
  }

}
