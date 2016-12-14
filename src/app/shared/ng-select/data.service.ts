/**
 * Created by nadinak on 12/6/2016.
 */

import {Injectable} from "@angular/core";

import {Http, Response, Request, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'

import {Observable}     from 'rxjs/Observable';
import {stringify} from "@angular/core/src/facade/lang";


/**
 * Created by nadinak on 11/14/2016.
 */


@Injectable()
export class DataService {
  public data:string;
  endpoint_url:string = "https://restcountries.eu/rest/v1/all";

  constructor(private http: Http){
    this.http = http;
  }

  //HTTP service for retrieving countries data
  getData (): Observable<any>{
    return this.http.get(this.endpoint_url)
      .map( res=>  res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
