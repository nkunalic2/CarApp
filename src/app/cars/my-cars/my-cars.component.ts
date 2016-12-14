import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {CarService} from './car.service';
import {Car} from './car';



@Component({
  selector: 'app-my-cars',
  templateUrl: 'my-cars.component.html',
  styleUrls: ['my-cars.component.css'],
  providers: [CarService]
})
export class MyCarsComponent implements OnInit {
  public cars: Car[];
  public selectedCar;

  constructor(private _carService: CarService, private router: Router) {
  this.cars = this._carService.getCars();
  }

  showDetails(_car: Car) {
    this.selectedCar = _car;
    this.router.navigate(['/car', this.selectedCar.id]);
  }

  ngOnInit() {
  }

}
