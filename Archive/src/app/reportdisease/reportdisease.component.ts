import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef,NgbDateAdapter, NgbDateStruct, } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants, ReportediseaseList, ReportedDisease, DeseaseList, Desease, UserLogin } from "../constant/constant";
//import {NgbDateNativeAdapter} from '../shared/services/datepicker-adapter';


@Component({
    selector: 'app-reportdisease',
    templateUrl: './reportdisease.component.html',
    styleUrls: ['./reportdisease.component.scss'],
   // providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]

})
export class ReportdiseaseComponent implements OnInit {

    public reportDiseaseUser: FormGroup;
    isAddUserDone: Boolean;
    reportedDiseaseList: ReportediseaseList;
    diseaseList: DeseaseList;
    userLogin: UserLogin
    private modalAddDeseaseRef: NgbModalRef;
    addUserDefaultCity: string;
    addUserDefaultDisease: string;
    strReportedDate : string;
    constructor(private fb: FormBuilder, private spinner: SpinnerService,
        private http: HttpClient, private modalService: NgbModal) { }

    ngOnInit() {
        this.getAllReportedDiseaseList();
        this.createReportDiseaseForm();
        this.userLogin = JSON.parse(localStorage.getItem(Constants.GetLoginDetails));
        this.reportDiseaseUser.controls['cityID'].setValue(this.userLogin.cityID);
        this.reportDiseaseUser.controls['uID'].setValue(this.userLogin.userID);

        this.diseaseList = JSON.parse(localStorage.getItem(Constants.GetDeseaseKey));
        this.addUserDefaultDisease = this.diseaseList[0].name;
        this.reportDiseaseUser.controls['dID'].setValue(this.diseaseList[0].deseaseID);


    }

    getAllReportedDiseaseList() {
        this.spinner.start();
        this.http.post(Constants.reportedDiseaselistUrl, JSON.stringify({ cityID: this.userLogin.cityID })).subscribe(
            (val) => {
                this.spinner.stop();
                this.reportedDiseaseList = val as ReportediseaseList;
                if (this.reportedDiseaseList.status == 1) {
                    // this.modalAddDeseaseRef.close();
                } else {
                    this.isAddUserDone = true;
                }
                console.log(this.reportedDiseaseList + "----POST call successful value returned in body", this.reportedDiseaseList.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddUserDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            }
            /*() => {
                this.spinner.stop();
                this.isAddUserDone = true;
                console.log("The POST observable is now completed.");
            }*/);
    }

    createReportDiseaseForm() {
        this.reportDiseaseUser = this.fb.group({
            dID: ['',],
            reportedOn: ['', Validators.required],
            remarks: ['', Validators.required],
            uID: ['',],
            cityID: ['',]
        });
    }

    onChangeDisease(selectedId: number)
    {
         this.reportDiseaseUser.controls['dID'].setValue(selectedId);
           console.log(selectedId+"...SELECTE......");
    }

    closeModelView()
    {
        this.modalAddDeseaseRef.close();
    }

    reportDiseaseModelDisplay(content) {
        this.isAddUserDone = false;
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    reportDiseaseAction(values: NgForm) {
     let ngbDate = this.reportDiseaseUser.controls['reportedOn'].value;
     this.strReportedDate = ngbDate.year+"/"+(ngbDate.month)+"/"+ngbDate.day;

    let formValues = this.reportDiseaseUser.value;
    formValues['reportedOn'] = this.strReportedDate;
        console.log(this.strReportedDate+".....Add Desease Action triggered......." + JSON.stringify(formValues));
        this.isAddUserDone = false;
        this.spinner.start();
        this.http.post(Constants.reportDiseaseaddUrl, JSON.stringify(formValues)).subscribe(
            (val) => {
                this.spinner.stop();
                this.reportedDiseaseList = val as ReportediseaseList;
                if (this.reportedDiseaseList.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddUserDone = true;
                }
                console.log(this.reportedDiseaseList.deseasereplist + "----POST call successful value returned in body", this.reportedDiseaseList.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddUserDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }


}
