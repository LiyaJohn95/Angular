import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';

@Component({
  selector: 'app-vaccinationgivenreport',
  templateUrl: './vaccinationgivenreport.component.html',
  styleUrls: ['./vaccinationgivenreport.component.scss']
})
export class VaccinationgivenreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
