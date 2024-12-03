import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.page.html',
  styleUrls: ['./race-details.page.scss'],
})
export class RaceDetailsPage implements OnInit {
  raceId: string | null = null; 
  raceDetails: any = null; 
  
  races = [
    {
      id: '1',
      name: 'Radiator Springs Grand Prix',
      description: 'Balapan cepat dan menantang di Radiator Springs!',
      date: '2024-12-15',
      location: 'Radiator Springs Speedway',
    },
    {
      id: '2',
      name: 'Route 66 Rally',
      description: 'Balapan panjang melewati Route 66!',
      date: '2024-12-20',
      location: 'Route 66',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.raceId = this.route.snapshot.paramMap.get('id');

    if (this.raceId) {
      
      this.raceDetails = this.races.find((race) => race.id === this.raceId);
    }
  }
}
