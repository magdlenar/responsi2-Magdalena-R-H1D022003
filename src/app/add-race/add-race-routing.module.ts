import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRacePage } from './add-race.page';

const routes: Routes = [
  {
    path: '',
    component: AddRacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRacePageRoutingModule {}
