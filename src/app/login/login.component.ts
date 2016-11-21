import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router /*, ActivatedRoute, Params*/ } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {User} from "../user/user";
import {UserService} from "../user/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
 user: User=new User()

  constructor(private router: Router, private _userService: UserService, private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameTxt: new FormControl('', [<any> Validators.required]),
      passwordTxt: new FormControl('', [<any> Validators.required])
    });

  }

  login(event) {
    this.user.setUser(1,"cookideData123","Nadina","Kunalic");
    Cookie.set('myGreatCookie',"cookie: "+ this.user.cookieData + " firstname: " + this.user.firstName + " lastname: "+this.user.lastName);
    this._userService.setUser(this.user); //setting user in shared service, so we can use the data in other modules
    this.router.navigate(["home"]);
  }

}
