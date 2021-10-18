import { Component, OnInit } from '@angular/core';

import { TravelsService } from '../../services/travels.service';

import { Travel } from '../../models/travels.model';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  travels: Travel[] = [];

  constructor( private travelsSvc: TravelsService ) { }

  ngOnInit(): void {
    this.travels = this.travelsSvc.getPlanets();
  }

}
