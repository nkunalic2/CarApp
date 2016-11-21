/**
 * Created by nadinak on 11/17/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Response, Request, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'

import {Observable}     from 'rxjs/Observable';
import {stringify} from "@angular/core/src/facade/lang";
import {Commentar} from "./comment";



@Injectable()
export class CommentService {
  private commentsUrl = 'http://httpbin.org/post';
  constructor(private http: Http){
    this.http = http;
  }

  postJSON(_comment:string):Observable<Commentar[]>{
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var fullDate=day + "/" + month + "/" + year;

    var json=JSON.stringify({comment:_comment, date:fullDate});
    var params=json;

    return this.http.post(this.commentsUrl, params)
      .map( res => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
