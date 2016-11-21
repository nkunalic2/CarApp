/**
 * Created by nadinak on 11/10/2016.
 */
export class User {
 public id: number;
 public cookieData: string;
 public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;

  constructor() {

  }

  setUser(_id:number, _cookie:string,_firstName:string, _lastName:string){
    this.id=_id;
    this.cookieData=_cookie;
    this.firstName=_firstName;
    this.lastName=_lastName;
  }


}
