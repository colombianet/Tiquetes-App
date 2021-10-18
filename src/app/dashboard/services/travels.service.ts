import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Travel, TravelUser } from '../models/travels.model';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  updateTravel = new Subject();
  travel!: Travel;

  travels: Travel[] = [
    {
      id: 1,
      name: 'Mercurio',
      price: 1000
    },
    {
      id: 2,
      name: 'Venus',
      price: 2000
    },
    {
      id: 3,
      name: 'Tierra',
      price: 3000
    },
    {
      id: 4,
      name: 'Marte',
      price: 4000
    },
    {
      id: 5,
      name: 'Júpiter',
      price: 5000
    },
    {
      id: 6,
      name: 'Saturno',
      price: 6000
    },
    {
      id: 7,
      name: 'Urano',
      price: 7000
    },
    {
      id: 8,
      name: 'Neptuno',
      price: 8000
    },
    {
      id: 9,
      name: 'Plutón',
      price: 9000
    }
  ];

  travelsUser: TravelUser[] = [];

  getPlanets() {
    return this.travels;
  }

  setTravel( travel: Travel ) {
    this.travel = travel;
    this.updateTravel.next();
  }

  getTravel() {
    return this.travel;
  }

  getPriceTravel( place: string ) {
    let priceTravel: any;
    this.travels.forEach( t => {
      if ( t.name == place ) {
        priceTravel = t.price;
      }
    })
    return priceTravel;
  }

  buyTravel( place: string, cuantity: number ) {
    const priceTravel = this.getPriceTravel(place);
    return priceTravel * cuantity;
  }

  saveTravels( name: string, cuantity: number, price: number ) {
    let exist = false;
    this.travelsUser.forEach( (tu) => {
      if ( tu.name == name ) {
        tu.cuantity = cuantity;
        tu.total = cuantity * price;
        exist = true;
      }
    })
    
    if ( !exist ) {
      const newsTravels = { name, cuantity, total: (price * cuantity) };
      this.travelsUser.push( newsTravels );
    }
  }

  getTravelsUser() {
    return JSON.parse( localStorage.getItem('travels')! );
  }
}
