import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadiatorPage } from './radiator.page';

const routes: Routes = [
  {
    path: '',
    component: RadiatorPage,
  },
  {
    path: 'add-race',
    loadChildren: () => import('./add-race/add-race.module').then( m => m.AddRacePageModule)
  },
  {
    path: 'race-details/:id', 
    loadChildren: () => import('./race-details/race-details.module').then(m => m.RaceDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadiatorPageRoutingModule {}
