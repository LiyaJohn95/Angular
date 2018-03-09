import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationgivenreportingComponent } from './vaccinationgivenreporting.component';

describe('VaccinationgivenreportingComponent', () => {
  let component: VaccinationgivenreportingComponent;
  let fixture: ComponentFixture<VaccinationgivenreportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationgivenreportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationgivenreportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
