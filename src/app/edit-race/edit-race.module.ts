import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddRacePageRoutingModule } from './edit-race-routing.module';
import { AddRacePage } from './edit-race.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRacePageRoutingModule
  ],
  declarations: [AddRacePage]
})
export class AddRacePageModule {}
