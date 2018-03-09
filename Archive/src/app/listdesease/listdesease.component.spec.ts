import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeseaseComponent } from './listdesease.component';

describe('ListdeseaseComponent', () => {
  let component: ListdeseaseComponent;
  let fixture: ComponentFixture<ListdeseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdeseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdeseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
