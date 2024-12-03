import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Impor modul halaman yang baru Anda buat
import { AddRacePageModule } from './add-race/add-race.module'; 
import { RaceDetailsPageModule } from './race-details/race-details.module';  // Pastikan jalur impor sudah benar

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AddRacePageModule,  // Menambahkan AddRacePageModule
    RaceDetailsPageModule,  // Menambahkan RaceDetailsPageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
