import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RaceDetailsPage } from './race-details.page';

describe('RaceDetailsPage', () => {
  let component: RaceDetailsPage;
  let fixture: ComponentFixture<RaceDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceDetailsPage],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'id') {
                    return '1'; // Contoh ID balapan
                  }
                  return null;
                },
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RaceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve race details based on ID', () => {
    expect(component.raceDetails).toBeTruthy();
    expect(component.raceDetails.name).toBe('Radiator Springs Grand Prix');
  });
});
