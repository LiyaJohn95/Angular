import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationComponent } from './vaccination.component';

describe('ListdeseaseComponent', () => {
  let component: VaccinationComponent;
  let fixture: ComponentFixture<VaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
