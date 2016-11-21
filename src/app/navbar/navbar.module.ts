import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import {Routes, RouterModule, Route} from '@angular/router'

@NgModule({
  imports: [RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [ NavbarComponent ]
})

export class NavbarModule { }
