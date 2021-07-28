import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';
import { Owner } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Car[]; //$in order to get througout the constructor the defines car list in SRVC
  make: string; // allow to add new cars through 2 way binding
  model: string;
  miles: number;
  // for owners
  owners: Owner[]; // same name as the list of owners already define in SRVC
  nom: string;
  prenom: string;
  email: string;

  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars(); //$ tran.. minus != Tran..
    this.owners = this.transportationService.getOwners();
  }

  addCar() {
    const newCar: Car = {
      make: this.make,
      model: this.model,
      miles: this.miles,
      owner: this.prenom
    };
    this.transportationService.addCar(newCar); // data send to SRVC and update here
  }

  addOwner() {
    const newOwner: Owner = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email
    };
    this.transportationService.addOwners(newOwner);
  }
}
