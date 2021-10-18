import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../auth/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userActive = localStorage.getItem('user');

  constructor( private dataSvc: DataService ) { }

  ngOnInit(): void {
  }

  logout() {
    this.dataSvc.logout();
  }

}
