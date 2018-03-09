import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants, UserLogin,VaccinationScheduleList,ScheduleVaccination,GeneralSettingsList,CityList, DeseaseList, VaccinationList } from "../constant/constant";

@Component({
  selector: 'app-vaccinationshedule',
  templateUrl: './vaccinationshedule.component.html',
  styleUrls: ['./vaccinationshedule.component.scss']
})
export class VaccinationsheduleComponent implements OnInit {

  public addvaccshd: FormGroup;
    isAddScheduleDone: Boolean;
    vaccScheduleListMaster: VaccinationScheduleList;
    private modalAddDeseaseRef: NgbModalRef;
    currentSelected : ScheduleVaccination;
    userCityList: CityList
    vaccinationList : VaccinationList
    public editvaccshd: FormGroup;
    generalSettings:string;
    addUserDefaultCity:string;
    vaccinationName:string;
    userLogin: UserLogin;
    constructor(private fb: FormBuilder, private spinner: SpinnerService,
        private http: HttpClient, private modalService: NgbModal) { }
    ngOnInit() {
        this.userLogin = JSON.parse(localStorage.getItem(Constants.GetLoginDetails));
        this.createFormAddVacSchedule();
        this.createFormEditVacinationScheule();
        this.getAllVaccinationScheduleList();
        this.userCityList = JSON.parse(localStorage.getItem(Constants.GetCityKey)) ;
        this.addUserDefaultCity = this.userCityList[0].name;
        this.addvaccshd.controls['cityID'].setValue(this.userCityList[0].idcity);

        this.vaccinationList = JSON.parse(localStorage.getItem(Constants.GetVaccinationKey)) ;
        this.vaccinationName = this.vaccinationList[0].name;
        this.addvaccshd.controls['vID'].setValue(this.vaccinationList[0].idvaccination);
    }

    //Get All users Details
    getAllVaccinationScheduleList() {
        //this.spinner.start();
        this.http.post(Constants.vaccinationScheduleListUrl,JSON.stringify({userID : this.userLogin.userID, cityID : this.userLogin.cityID})).subscribe(
            (val) => {
                //this.spinner.stop();
                this.vaccScheduleListMaster = val as VaccinationScheduleList;
                if (this.vaccScheduleListMaster.status == 1) {
                   // this.modalAddDeseaseRef.close();
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


//Add Vaccination Schedule
createFormAddVacSchedule() {
    this.addvaccshd = this.fb.group({
        vID: ['', Validators.required],
        sheduledOn: ['', Validators.required],
        cityID: ['', Validators.required],
        remarks: ['', Validators.required]
    });
}
    //Add User Page
    addScheduleModelDisplay(content) {
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    onChange(selectedId: number)
{
     this.addvaccshd.controls['cityID'].setValue(selectedId);
       console.log(selectedId+"...SELECTE......");
}


    addVaccScheduleAction(values: NgForm) {
        console.log("Add Desease Action triggered......."+JSON.stringify(values.value));
        this.isAddScheduleDone = false;
        this.spinner.start();
        this.http.post(Constants.vaccinationScheduleAddNewUrl, JSON.stringify(values.value)).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccScheduleListMaster = val as VaccinationScheduleList;
                if (this.vaccScheduleListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
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


    //Edit User
    createFormEditVacinationScheule() {
        this.editvaccshd = this.fb.group({
            vID: ['', Validators.required],
            sheduledOn: ['', Validators.required],
            cityID: ['', Validators.required],
            remarks: ['', Validators.required]
        });
    }

    editVaccinationScheduleSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......"+JSON.stringify(values.value));
        this.isAddScheduleDone = false;
        this.spinner.start();
        this.http.post(Constants.vaccinationScheduleUpdateUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccScheduleListMaster = val as VaccinationScheduleList;
                if (this.vaccScheduleListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
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

    editVacciSheduleAction(vaccinationContent, vaccinationCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = vaccinationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(vaccinationContent);
        
    }

    //Delete Desease
    deleteVacciSheduleAction(vaccinationContent, vaccinationCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = vaccinationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(vaccinationContent);
        
    }

    deleteSchedulSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......");
        this.isAddScheduleDone = false;
        this.spinner.start();
        this.http.post(Constants.vaccinationScheduleDeleteUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccScheduleListMaster = val as VaccinationScheduleList;
                if (this.vaccScheduleListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
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

    getUserCityDetails()
    {
        
    }

}
