import { Component, Input, OnInit } from '@angular/core';
import { Travel } from '../../models/travels.model';
import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  @Input() travel!: Travel;
  seeModal = false;

  constructor( private travelSvc: TravelsService ) { }

  ngOnInit(): void {
    this.travelSvc.updateTravel.subscribe()
  }

  add( travel: Travel ) {
    this.travelSvc.setTravel( travel );
    this.seeModal = true;
  }

  closeModal( event: any ) {
    this.seeModal = event;
  }

}
