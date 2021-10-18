import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

import { TravelsService } from '../../services/travels.service';
import { Travel } from '../../models/travels.model';

@Component({
  selector: 'app-overview-travels',
  templateUrl: './overview-travels.component.html',
  styleUrls: ['./overview-travels.component.css']
})
export class OverviewTravelsComponent implements OnInit, OnDestroy {

  @ViewChild('exampleModal') exampleModal!: ElementRef;
  @ViewChild('save') save!: ElementRef;
  @Input() travel!: Travel;
  @Output() seeModal: EventEmitter<boolean> = new EventEmitter();
  cuantityTravelUser = 0;
  inputCuantity = '';
  subscription!: Subscription;
  form: FormGroup = this.fb.group({
    entrada: [ '', [ Validators.required ]]
  })

  constructor( private travelSvc: TravelsService, private fb: FormBuilder, private renderer: Renderer2 ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.form.reset();
  }

  ngOnInit(): void {
    this.subscription = this.travelSvc.updateTravel.subscribe( () => {
      this.travel = this.travelSvc.getTravel();
      this.form.reset();
      this.cuantityTravelUser = 0;
      this.inputCuantity = '';
    })
  }

  saveTravels( place: string, cuantity: string, price: number ) {
    if ( this.getEntrada() == '' ) {
      Swal.fire('Error', 'No has ingresado la cantidad de vuelos', 'error');
      return;
    }
    
    this.travelSvc.saveTravels(place, Number( cuantity ), price);
    this.renderer.setAttribute(this.save.nativeElement, "data-dismiss", "modal");
    localStorage.setItem('travels', JSON.stringify( this.travelSvc.travelsUser ))
    Swal.fire('Excelente desición!', 'Su vuelo ha sido registrado', 'success');
  }

  calculateCuantity( cuantity: any ) {
    if ( cuantity.data == null && this.inputCuantity.length == 1 ) {
      this.cuantityTravelUser = 0;
      this.inputCuantity = '';
    } else if ( cuantity.data == null ) {
      const cadena = this.inputCuantity;
      this.inputCuantity = cadena.substr(0, cadena.length - 1);
      this.finishedTravel();
    } else {
      this.inputCuantity += cuantity.data;
      this.finishedTravel();
    }
  }

  private finishedTravel() {
    this.cuantityTravelUser = 0;
    this.cuantityTravelUser += this.travelSvc.buyTravel( this.travel.name, Number(this.inputCuantity) );
  }

  getEntrada() {
    return this.form.get('entrada')?.value;
  }
}
