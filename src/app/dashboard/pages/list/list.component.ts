import { Component, OnInit } from '@angular/core';

import { TravelUser } from '../../models/travels.model';

import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  travelsUser: TravelUser[] = [];

  constructor( private travelsSvc: TravelsService ) { }

  ngOnInit(): void {
    this.travelsUser = this.travelsSvc.getTravelsUser() as TravelUser[];
  }

}
