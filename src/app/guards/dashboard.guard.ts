import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanLoad {
  token = localStorage.getItem('token') || '';

  constructor( private router: Router ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.token === '' || this.token === null) {
      this.router.navigate(['/auth'])
      return false;
    } else {
      return true;
    }
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.token === '' || this.token === null) {
      this.router.navigate(['/auth'])
      return false;
    } else {
      return true;
    }
  }
}
