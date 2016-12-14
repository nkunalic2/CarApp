import {CARS} from './car-data';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable}     from 'rxjs/Observable';



/**
 * Created by nadinak on 11/14/2016.
 */


@Injectable()
export class CarService {
  public data: string;
  endpoint_url: string = 'https://restcountries.eu/rest/v1/alpha/';

  constructor(private http: Http) {
    this.http = http;
  }

  // HTTP service
  getCarsByRegion (region: string): Observable<string> {
    return this.http.get(this.endpoint_url + region)
      .map( res => res.json())
      // ...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCars() {
    return CARS;
  }

  getCarById(id: number) {
     return this.getCars().find(car => car.id === id);
  }


}
