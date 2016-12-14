import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {CarService} from '../my-cars/car.service';
import {Car} from '../my-cars/car';
import 'rxjs/Rx';




@Component({
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.css'],
  providers: [CarService]

})

export class CarComponent implements OnInit {
  car: Car;
  httpData: string;
  country: string;
  error: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _carService: CarService) {}


  ngOnInit() {

    // retrieve selected car by parametar from ROUTE
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.car = this._carService.getCarById(id);
    });

    // retrieve COUNTRY BY contry code VIA HTTP service
    this._carService.getCarsByRegion(this.car.countryCode).subscribe(res => {
      this.httpData = res;
      this.country = this.httpData['name'];
    },
      err => {
        // Log errors if any
        console.log(err);
      }
      );
  }

}

