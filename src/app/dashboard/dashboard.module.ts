import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { OverviewTravelsComponent } from './components/overview-travels/overview-travels.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { TravelComponent } from './pages/travel/travel.component';

import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    ListComponent,
    OverviewTravelsComponent,
    TravelsComponent,
    TravelComponent,

    ImagePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
