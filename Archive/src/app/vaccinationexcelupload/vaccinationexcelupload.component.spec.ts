import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationexceluploadComponent } from './vaccinationexcelupload.component';

describe('VaccinationexceluploadComponent', () => {
  let component: VaccinationexceluploadComponent;
  let fixture: ComponentFixture<VaccinationexceluploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationexceluploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationexceluploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
