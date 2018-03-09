import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdiseaseComponent } from './reportdisease.component';

describe('ReportdiseaseComponent', () => {
  let component: ReportdiseaseComponent;
  let fixture: ComponentFixture<ReportdiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
