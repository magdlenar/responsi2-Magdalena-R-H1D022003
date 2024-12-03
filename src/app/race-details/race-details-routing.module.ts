import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceDetailsPage } from './race-details.page';

const routes: Routes = [
  {
    path: '',
    component: RaceDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaceDetailsPageRoutingModule {}
