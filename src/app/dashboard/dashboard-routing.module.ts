import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'travels', component: TravelsComponent },
      { path: 'list', component: ListComponent },
      { path: '**', redirectTo: 'travels' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
