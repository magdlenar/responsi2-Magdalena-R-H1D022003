import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RaceDetailsPageRoutingModule } from './race-details-routing.module'; 
import { RaceDetailsPage } from './race-details.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaceDetailsPageRoutingModule 
  ],
  declarations: [RaceDetailsPage] 
})
export class RaceDetailsPageModule {}
