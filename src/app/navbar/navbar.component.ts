import { Component, OnInit } from '@angular/core';
import {User} from "../user/user";
import {UserService} from "../user/user.service";



@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']

})
export class NavbarComponent implements OnInit {
  user:User;

  constructor(private _nest:UserService) {

  }

  ngOnInit() {
    this.user=this._nest.getUser();

  }

}
