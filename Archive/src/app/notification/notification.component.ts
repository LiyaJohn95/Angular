import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { Constants, CityList, City, GeneralSettingsList, NotificationList, Notfications, VaccinationList,RecurringList } from "../constant/constant";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    public addnotification: FormGroup;
    isAddNotificationDone: Boolean;
    private modalAddDeseaseRef: NgbModalRef;
    public editnotification: FormGroup;
    notificationList: NotificationList;
    notification: Notfications;
    addUserDefaultCity: string;
    addUserDefaultVaccination: string;
    strReportedDate: string;
    vID:number;
    vaccinationList: VaccinationList;
    cityList : CityList;
    strfireDate :string;
    currentSelected : Notfications;
    recurringList: RecurringList;
    defaultRecurringName : string;
    isVaccinationNotify : boolean;
    constructor(private fb: FormBuilder, private spinner: SpinnerService,
        private http: HttpClient, private modalService: NgbModal) { }

    ngOnInit() {

        this.getAllNotificationList();
        this.createFormAddNotifcation();
        this.createFormEditNotifcation();

        this.vaccinationList = JSON.parse(localStorage.getItem(Constants.GetVaccinationKey));
        this.addUserDefaultVaccination = this.vaccinationList[0].name;
        this.addnotification.controls['vID'].setValue(this.vaccinationList[0].idvaccination);

        this.cityList = JSON.parse(localStorage.getItem(Constants.GetCityKey));
        this.addUserDefaultVaccination = this.cityList[0].name;
        this.addnotification.controls['cityID'].setValue(this.cityList[0].idcity);

        this.recurringList = JSON.parse(localStorage.getItem(Constants.GetRecurringKey));
        this.defaultRecurringName = this.recurringList[0].name;
        this.addnotification.controls['recurring_type'].setValue(this.recurringList[0].id);

        this.addnotification.controls['type'].setValue(1);
        this.isVaccinationNotify = true;

    }



    getAllNotificationList() {
        this.spinner.start();
        this.http.post(Constants.notificationListUrl, JSON.stringify({ cityID: 1, type :1 })).subscribe(
            (val) => {
                this.spinner.stop();
                this.notificationList = val as NotificationList;
                if (this.notificationList.status == 1) {
                    // this.modalAddDeseaseRef.close();
                } else {
                    this.isAddNotificationDone = true;
                }
                console.log(this.notificationList.notification + "----POST call successful value returned in body", this.notificationList.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddNotificationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }




    createFormAddNotifcation() {
        this.addnotification = this.fb.group({
            type: ['', Validators.required],
            firedOn: ['', Validators.required],
            cityID: ['', Validators.required],
            message: ['', Validators.required],
            vID : ['', Validators.required],
            createdBy: [''],
            recurring_type : ['', Validators.required]
        });
    }

    //Add notification Page
    addNotificationModelDisplay(content) {
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    closeModelView()
    {
        this.modalAddDeseaseRef.close();
    }

    onChangeNoticType(selectedId: number)
    {

        if(selectedId > 1)
        {
            this.isVaccinationNotify = false;
        }else
        {
            this.isVaccinationNotify = true;
        }
        console.log(selectedId+"...SELECTE.Notification....."+this.isVaccinationNotify);
         this.addnotification.controls['type'].setValue(selectedId);
         
    }

    onChangeCity(selectedId: number)
    {
         this.addnotification.controls['cityID'].setValue(selectedId);
           console.log(selectedId+"...SELECTE......");
    }

    onChangeVaccination(selectedId: number)
    {
         this.addnotification.controls['vID'].setValue(selectedId);
           console.log(selectedId+"...SELECTE......");
    }

    onChangeRecurringType(selectedId: number)
    {
         this.addnotification.controls['recurring_type'].setValue(selectedId);
           console.log(selectedId+"...SELECTE......");
    }


    notificatioAddAction(values: NgForm) {
        let ngbDate = this.addnotification.controls['firedOn'].value;
        this.strfireDate = ngbDate.year+"/"+(ngbDate.month)+"/"+ngbDate.day;
   
       let formValues = this.addnotification.value;
       formValues['firedOn'] = this.strReportedDate;
       formValues['recurring_type'] = 1;
       formValues['createdBy'] = 1;
           console.log(this.strReportedDate+".....Add Desease Action triggered......." + JSON.stringify(formValues));
           this.isAddNotificationDone = false;
           this.spinner.start();
           this.http.post(Constants.notificationAddNewUrl, JSON.stringify(formValues)).subscribe(
               (val) => {
                   this.spinner.stop();
                   this.notificationList = val as NotificationList;
                   if (this.notificationList.status == 1) {
                       this.modalAddDeseaseRef.close();
                   } else {
                       this.isAddNotificationDone = true;
                   }
                   console.log(this.notificationList.notification + "----POST call successful value returned in body", this.notificationList.status);
               },
               (err: HttpErrorResponse) => {
                   this.spinner.stop();
                   this.isAddNotificationDone = true;
                 if (err.error instanceof Error) {
                   console.log("Client-side error occured.");
                 } else {
                   console.log("Server-side error occured.");
                 }
               });
       }


       createFormEditNotifcation() {
        this.editnotification = this.fb.group({
            type: ['', Validators.required],
            firedOn: ['', Validators.required],
            cityID: ['', Validators.required],
            message: ['', Validators.required],
            vID : ['', Validators.required],
            createdBy: [''],
            recurring_type : ['', Validators.required]
        });
    }

    //Add notification Page
    editNotificationModelDisplay(content, notificationCurrentselected) {
        this.currentSelected = notificationCurrentselected;
        
        this.editnotification.controls['type'].setValue(this.currentSelected.type);
        this.editnotification.controls['cityID'].setValue(this.currentSelected.cityID);
        this.editnotification.controls['vID'].setValue(this.currentSelected.vID);
        this.editnotification.controls['firedOn'].setValue(this.currentSelected.createdBy);
        this.editnotification.controls['recurring_type'].setValue(this.currentSelected.recurring_type);
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    editNotificationSubmit(values: NgForm) {
        let ngbDate = this.editnotification.controls['firedOn'].value;
        this.strfireDate = ngbDate.year+"/"+(ngbDate.month)+"/"+ngbDate.day;
        this.currentSelected.firedOn=this.strfireDate;
        console.log(JSON.stringify(this.currentSelected)+",.....Edit Desease Action triggered......"+JSON.stringify(values.value));
        this.isAddNotificationDone = false;
        this.spinner.start();
        this.http.post(Constants.notificationUpdateUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.notificationList = val as NotificationList;
                if (this.notificationList.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddNotificationDone = true;
                }
                console.log(this.notificationList.notification + "----POST call successful value returned in body", this.notificationList.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddNotificationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }

    deleteNotificationModelDisplay(content, notificationCurrentselected) {
        this.currentSelected = notificationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    deleteNotificationSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......");
        this.isAddNotificationDone = false;
        this.spinner.start();
        this.http.post(Constants.notificationDeleteUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.notificationList = val as NotificationList;
                if (this.notificationList.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddNotificationDone = true;
                }
                console.log(this.notificationList.notification + "----POST call successful value returned in body", this.notificationList.status);
            },
            (err: HttpErrorResponse) => {
                this.spinner.stop();
                this.isAddNotificationDone = true;
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            });
    }

}
