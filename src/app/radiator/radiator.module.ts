import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RadiatorPageRoutingModule } from './radiator-routing.module';
import { RadiatorPage } from './radiator.page';
import { RaceDetailsPageModule } from './race-details/race-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiatorPageRoutingModule, 
    RaceDetailsPageModule,  
  ],
  declarations: [RadiatorPage]
})
export class RadiatorPageModule {}
