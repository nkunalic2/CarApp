/**
 * Created by nadinak on 11/11/2016.
 */
import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()

export class UserService{
   public user:User;

  constructor() {

  }

    setUser(_user:User){
      this.user=_user;
    }

    getUser():User {
      return this.user;
    }

}

