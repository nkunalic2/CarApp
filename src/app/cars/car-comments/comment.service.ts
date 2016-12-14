/**
 * Created by nadinak on 11/17/2016.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable}     from 'rxjs/Observable';
import {Commentar} from './comment';



@Injectable()
export class CommentService {
  private commentsUrl = 'http://httpbin.org/post';
  constructor(private http: Http) {
    this.http = http;
  }

  postJSON(_comment: string): Observable<Commentar[]> {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let fullDate = day + '/' + month + '/' + year;

    let json = JSON.stringify({comment: _comment, date: fullDate});
    let params = json;

    return this.http.post(this.commentsUrl, params)
      .map( res => res.json())
      // ...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
