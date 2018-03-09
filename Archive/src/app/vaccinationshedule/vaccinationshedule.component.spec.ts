import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationsheduleComponent } from './vaccinationshedule.component';

describe('VaccinationsheduleComponent', () => {
  let component: VaccinationsheduleComponent;
  let fixture: ComponentFixture<VaccinationsheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationsheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationsheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
