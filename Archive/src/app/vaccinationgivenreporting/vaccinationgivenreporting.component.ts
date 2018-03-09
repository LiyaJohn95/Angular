import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants,CityList,VaccinationScheduleList,ScheduleVaccination,UserLogin  } from "../constant/constant";

@Component({
  selector: 'app-vaccinationgivenreporting',
  templateUrl: './vaccinationgivenreporting.component.html',
  styleUrls: ['./vaccinationgivenreporting.component.scss']
})
export class VaccinationgivenreportingComponent implements OnInit {
  public reportvaccination: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilenumber = "[0-9]*";
  isAddScheduleDone = false;
  userCityList :CityList;
  vaccinationScheduleList: VaccinationScheduleList;
  vaccinationScheduleListResult: VaccinationScheduleList;
  userLogin: UserLogin;
  constructor(public fb: FormBuilder, public spinner: SpinnerService,
    public http: HttpClient) { }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem(Constants.GetLoginDetails));
    this.createFormAddVacSchedule();
    this.getCurrentVaccinationScheduledList();

    this.userCityList = JSON.parse(localStorage.getItem(Constants.GetCityKey)) ;
        this.reportvaccination.controls['cityID'].setValue(this.userCityList[0].idcity);
        this.reportvaccination.controls['gender'].setValue("M");
      }

  createFormAddVacSchedule() {
    this.reportvaccination = this.fb.group({
        vID: ['', Validators.required],
        vsID: ['',''],
        uID:['',''],
        name: ['', Validators.required],
        address: ['', Validators.required],
        mobile: ['', [Validators.required,Validators.maxLength(12), Validators.pattern(this.mobilenumber)]],
        emailid: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
        age: ['', Validators.required],
        gender: ['',''],
        cityID: ['', Validators.required]
    });
  }

  getCurrentVaccinationScheduledList() {
    this.spinner.start();
    this.http.post(Constants.currentVaccinationReportURL,JSON.stringify({ cityID : this.userLogin.cityID})).subscribe(
        (val) => {
            this.spinner.stop();
            this.vaccinationScheduleList = val as VaccinationScheduleList;
            if (this.vaccinationScheduleList.status == 1) {
               // this.modalAddDeseaseRef.close();
               this.reportvaccination.controls['vsID'].setValue(this.vaccinationScheduleList.vaccishedule[0].idshedule);
            } else {
                this.isAddScheduleDone = true;
            }
        },
        (err: HttpErrorResponse) => {
            this.spinner.stop();
            this.isAddScheduleDone = true;
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });
}

onChange(selectedId: number)
{
     this.reportvaccination.controls['vsID'].setValue(selectedId);
       console.log(selectedId+"...SELECTE......");
}

onChangeGender(selectedId: string)
{
     this.reportvaccination.controls['gender'].setValue(selectedId);
       console.log(selectedId+"...SELECTE......");
}

vaccinationReportingAction(values) {
    let formValues = this.reportvaccination.value;  
    formValues['uID'] = 1;
     console.log(".....Add Desease Action triggered......." + JSON.stringify(formValues));
     this.isAddScheduleDone = false;
     this.spinner.start();
     this.http.post(Constants.reportCurrentVaccinationList, JSON.stringify(formValues)).subscribe(
         (val) => {
             this.spinner.stop();
             this.vaccinationScheduleListResult = val as VaccinationScheduleList;
             if (this.vaccinationScheduleListResult.status == 1) {
              this.isAddScheduleDone = true;
             } 
             this.createFormAddVacSchedule();
             console.log( "----POST call successful value returned in body", this.vaccinationScheduleList.status);
         },
         (err: HttpErrorResponse) => {
             this.spinner.stop();
             this.isAddScheduleDone = true;
           if (err.error instanceof Error) {
             console.log("Client-side error occured.");
           } else {
             console.log("Server-side error occured.");
           }
         });
 }


 

}
