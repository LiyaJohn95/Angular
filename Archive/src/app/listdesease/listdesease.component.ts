import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants, DeseaseList, Desease } from "../constant/constant";


@Component({
    selector: 'app-listdesease',
    templateUrl: './listdesease.component.html',
    styleUrls: ['./listdesease.component.scss'],
    animations: [routerTransition()]
})
export class ListdeseaseComponent implements OnInit {
    public addisease: FormGroup;
    isAddDeseaseDone: Boolean;
    deseaseListMaster: DeseaseList;
    private modalAddDeseaseRef: NgbModalRef;
    currentSelected : Desease;

    public editisease: FormGroup;
    @ViewChild('editdesease') private editdesease;
    constructor(private fb: FormBuilder, private spinner: SpinnerService,
        private http: HttpClient, private modalService: NgbModal) { }
    ngOnInit() {
        this.createFormAddDisease();
        this.createFormEditDisease();
        this.getAllDeseaseList();
    }

    //Add Disease
    createFormAddDisease() {
        this.addisease = this.fb.group({
            name: ['', Validators.required],
            remarks: ['', Validators.required]
        });
    }

    getAllDeseaseList() {
        this.spinner.start();
        this.http.get(Constants.deseaseListUrl)
            .map(res => res)
            .subscribe(
                data => {
                    this.spinner.stop();
                    this.deseaseListMaster = data as DeseaseList;
                    console.log(this.deseaseListMaster.deseaselist.length + "...The POST observable is now completed......Data...." + data);
                },
                error => {
                    //alert(error);
                    this.spinner.stop();
                },
                () => {
                    this.spinner.stop();
                    console.log("The POST observable is now completed.");
                }
            );
    }



    //Add Desease Page
    addDesease(content) {
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    //Add Desease Page


    addDiseaseAction(values: NgForm) {
        console.log("Add Desease Action triggered");
        this.isAddDeseaseDone = false;
        this.spinner.start();
        this.http.post(Constants.addDeseaseUrl, JSON.stringify(values.value)).subscribe(
            (val) => {
                this.spinner.stop();
                this.deseaseListMaster = val as DeseaseList;
                if (this.deseaseListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddDeseaseDone = true;
                }
                console.log(this.deseaseListMaster.deseaselist.length + "----POST call successful value returned in body", this.deseaseListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddDeseaseDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }


    //Edit Disease
    createFormEditDisease() {
        this.editisease = this.fb.group({
            name: ['', Validators.required],
            remarks: ['', Validators.required]
        });
    }

    editDiseaseSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......"+JSON.stringify(values.value));
        this.isAddDeseaseDone = false;
        this.spinner.start();
        this.http.post(Constants.updateDeseaseUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.deseaseListMaster = val as DeseaseList;
                if (this.deseaseListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddDeseaseDone = true;
                }
                //console.log(this.deseaseListMaster.deseaseList.length + "----POST call successful value returned in body", this.deseaseListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddDeseaseDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }

    editDeseaseAction(deseaseContent, deseaseCurrentselected) {
        console.log("Edit Action....");
        this.currentSelected = deseaseCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(deseaseContent);
        
    }

    //Delete Desease
    deleteDeseaseAction(deseaseContent, deseaseCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = deseaseCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(deseaseContent);
        
    }

    deleteDiseaseSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......"+JSON.stringify(values.value));
        this.isAddDeseaseDone = false;
        this.spinner.start();
        this.http.post(Constants.deleteDeseaseUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.deseaseListMaster = val as DeseaseList;
                if (this.deseaseListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddDeseaseDone = true;
                }
                console.log(this.deseaseListMaster.deseaselist.length + "----POST call successful value returned in body", this.deseaseListMaster.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddDeseaseDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }

}



