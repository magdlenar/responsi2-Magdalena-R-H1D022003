import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.page.html',
  styleUrls: ['./add-race.page.scss'],
})
export class AddRacePage {
  raceName: string = '';
  raceDescription: string = '';
  raceDate: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  
  async addRace() {
    if (this.raceName && this.raceDescription && this.raceDate) {
      
      const toast = await this.toastController.create({
        message: 'Balapan berhasil ditambahkan!',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();

    
      this.router.navigate(['/radiator']);
    } else {
      const toast = await this.toastController.create({
        message: 'Harap isi semua kolom!',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }
}
