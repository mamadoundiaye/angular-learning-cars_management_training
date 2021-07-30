import { Injectable } from '@angular/core';
import { Car } from './car';
import { Owner } from './car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  Http(){ return 'http://localhost:3000/cars/'; }

  constructor() {}

  // new code
  getCars(): Observable {
    return this.Http;
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
