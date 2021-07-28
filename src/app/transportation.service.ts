import { Injectable } from '@angular/core';
import { Car } from './car';
import { Owner } from './car';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  // new code
  subaru: Car = {
    make: 'Subaru',
    model: 'Outback',
    miles: 58232,
    owner: 'demba dia'
  };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
  // me adding new owners
  owner_id1: Owner = { nom: 'ndiaye', prenom: 'mamadou', email: 'nd@ept.sn' };
  owner_id2: Owner = { nom: 'diop', prenom: 'diarra', email: 'dd@ept.sn' };
  owner_id3: Owner = { nom: 'sene', prenom: 'mbaye', email: 's@ept.sn' };
  cars: Car[] = [this.subaru, this.honda, this.bmw];
  owners: Owner[] = [this.owner_id1, this.owner_id2, this.owner_id3];

  constructor() {}

  // new code
  getCars() {
    return this.cars;
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  getOwners() {
    return this.owners;
  }

  addOwners(owner: Owner) {
    this.owners.push(owner);
  }
}
