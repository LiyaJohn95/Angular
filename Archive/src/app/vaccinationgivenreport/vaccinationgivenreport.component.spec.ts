import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationgivenreportComponent } from './vaccinationgivenreport.component';

describe('VaccinationgivenreportComponent', () => {
  let component: VaccinationgivenreportComponent;
  let fixture: ComponentFixture<VaccinationgivenreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationgivenreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationgivenreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
