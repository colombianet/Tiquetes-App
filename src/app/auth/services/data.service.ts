import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: User[] = [
    {
        email: 'admin@digitalware.com.co',
        name: 'Admin',
        password: '12345',
        active: false
    },
    {
        email: 'asesor@digitalware.com.co',
        name: 'Asesor',
        password: '12345',
        active: false
    },
    {
        email: 'test@digitalware.com.co',
        name: 'Test',
        password: '12345',
        active: false
    }
]

  constructor( private router: Router ) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
