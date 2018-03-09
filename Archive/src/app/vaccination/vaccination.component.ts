import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants, Vaccination, VaccinationList } from "../constant/constant";


@Component({
    selector: 'app-vaccination',
    templateUrl: './vaccination.component.html',
    styleUrls: ['./vaccination.component.scss'],
    animations: [routerTransition()]
})
export class VaccinationComponent implements OnInit {
    public addvacc: FormGroup;
    isAddVaccinationDone: Boolean;
    vaccinationListMaster: VaccinationList;
    private modalAddDeseaseRef: NgbModalRef;
    currentSelected : Vaccination;

    public editvacc: FormGroup;
   
    constructor(private fb: FormBuilder, private spinner: SpinnerService,
        private http: HttpClient, private modalService: NgbModal) { }
    ngOnInit() {
        this.createFormAddVaccination();
        this.createFormEditVaccination();
        this.getAllVaccinationList();
    }

    //Add Disease
    createFormAddVaccination() {
        this.addvacc = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    getAllVaccinationList() {
        this.spinner.start();
        this.http.post(Constants.vaccinationListUrl,JSON.stringify({status : 1})).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccinationListMaster = val as VaccinationList;
                if (this.vaccinationListMaster.status == 1) {
                   // this.modalAddDeseaseRef.close();
                } else {
                    this.isAddVaccinationDone = true;
                }
                console.log(this.vaccinationListMaster.vaccinationlist.length + "----POST call successful value returned in body", this.vaccinationListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddVaccinationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }



    //Add Desease Page
    addVaccinationModelDisplay(content) {
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    //Add Desease Page


    addVaccinationAction(values: NgForm) {
        console.log("Add Desease Action triggered");
        this.isAddVaccinationDone = false;
        this.spinner.start();
        this.http.post(Constants.addNewVaccinationUrl, JSON.stringify(values.value)).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccinationListMaster = val as VaccinationList;
                if (this.vaccinationListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddVaccinationDone = true;
                }
                console.log(this.vaccinationListMaster.vaccinationlist.length + "----POST call successful value returned in body", this.vaccinationListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddVaccinationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }


    //Edit Disease
    createFormEditVaccination() {
        this.editvacc = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    editVaccinationSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......"+JSON.stringify(values.value));
        this.isAddVaccinationDone = false;
        this.spinner.start();
        this.http.post(Constants.updateVaccinationUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccinationListMaster = val as VaccinationList;
                if (this.vaccinationListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddVaccinationDone = true;
                }
                console.log(this.vaccinationListMaster.vaccinationlist.length + "----POST call successful value returned in body", this.vaccinationListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddVaccinationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }

    editVaccinationAction(vaccinationContent, vaccinationCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = vaccinationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(vaccinationContent);
        
    }

    //Delete Desease
    deleteVaccinationAction(vaccinationContent, vaccinationCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = vaccinationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(vaccinationContent);
        
    }

    deleteVaccinatiobSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......");
        this.isAddVaccinationDone = false;
        this.spinner.start();
        this.http.post(Constants.deleteVaccinationUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.vaccinationListMaster = val as VaccinationList;
                if (this.vaccinationListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddVaccinationDone = true;
                }
                console.log(this.vaccinationListMaster.vaccinationlist.length + "----POST call successful value returned in body", this.vaccinationListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddVaccinationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }

}



