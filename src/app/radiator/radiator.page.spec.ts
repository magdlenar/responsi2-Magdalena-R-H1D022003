import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadiatorPage } from './radiator.page';

describe('RadiatorPage', () => {
  let component: RadiatorPage;
  let fixture: ComponentFixture<RadiatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
