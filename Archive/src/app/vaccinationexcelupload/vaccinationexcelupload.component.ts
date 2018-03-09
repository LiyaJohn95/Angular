import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants ,GeneralResponse,VaccinationScheduleList,UserLogin } from "../constant/constant";

@Component({
  selector: 'app-vaccinationexcelupload',
  templateUrl: './vaccinationexcelupload.component.html',
  styleUrls: ['./vaccinationexcelupload.component.scss']
})
export class VaccinationexceluploadComponent implements OnInit {
  public uploadExcel: FormGroup;
  isFileAvailable : boolean;
  vaccinationScheduleList : VaccinationScheduleList;
  generalStatus: GeneralResponse;
  isNetworkOperationDone = false;
  fileToUpload: File = null;
  isExcelUploadDone :boolean;
  userLogin: UserLogin;
  idVaccination: number;
  idSchedule: number;
  constructor(public fb: FormBuilder, public spinner: SpinnerService,
    public http: HttpClient) { }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem(Constants.GetLoginDetails));
    this.createFormUploadExcel();
    this.getCurrentVaccinationScheduledList();
    this.isFileAvailable = false;
    this.isExcelUploadDone =false;
     
  }


  createFormUploadExcel() {
    this.uploadExcel = this.fb.group({
        file: ['', Validators.required],
        vID: ['',''],
        vsID: ['',''],
        cityID: ['',''],
        userID: ['','']
    });
}



onChangeVaccination(selectedId: number)
{
     this.uploadExcel.controls['vsID'].setValue(this.vaccinationScheduleList.vaccishedule[selectedId].idshedule);
     this.idVaccination = this.vaccinationScheduleList.vaccishedule[selectedId].idvaccination;
     this.idSchedule = this.vaccinationScheduleList.vaccishedule[selectedId].idshedule;
     console.log(selectedId+"...SELECTE......");
}

  onChange(files: FileList) {
    this.fileToUpload = files.item(0);
    this.isFileAvailable = true;
    console.log(this.fileToUpload+',,,,File selected.....'+this.fileToUpload);
    let postData = {field1:"field1", field2:"field2"}; // Put your form data variable. This is only example.
    /*this._service.postWithFile(this.baseUrl + "add-update",postData,file).then(result => {
        console.log(result);
    });*/
}

getCurrentVaccinationScheduledList() {
  this.spinner.start();
  this.http.post(Constants.currentVaccinationReportURL,JSON.stringify({ cityID : this.userLogin.cityID})).subscribe(
      (val) => {
          this.spinner.stop();
          this.vaccinationScheduleList = val as VaccinationScheduleList;
          if (this.vaccinationScheduleList.status == 1) {
             // this.modalAddDeseaseRef.close();
             this.idVaccination = this.vaccinationScheduleList.vaccishedule[0].idvaccination;
             this.uploadExcel.controls['vsID'].setValue(0);
          } else {
              this.isNetworkOperationDone = true;
          }
      },
      (err: HttpErrorResponse) => {
          this.spinner.stop();
          this.isNetworkOperationDone = true;
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
}

addVaccExcelUploadScheduleAction(values)
{

  console.log("Upload Action.......");
  let formData:FormData = new FormData();
  formData.append('file', this.fileToUpload, this.fileToUpload.name);
  formData.append('userID', ''+this.userLogin.userID);
  formData.append('vID', ''+this.idVaccination);
  formData.append('vsID', ''+this.idSchedule);
  formData.append('cityID', ''+this.userLogin.cityID);
  this.spinner.start();
  this.http.post(Constants.uploadExcelSheetURL,formData).subscribe(
      (val) => {
          this.spinner.stop();
          this.generalStatus = val as GeneralResponse;
          if (this.generalStatus.status == "1") {
            this.isExcelUploadDone = true;
          } else {
              this.isNetworkOperationDone = true;
              this.isExcelUploadDone = true;
          }
      },
      (err: HttpErrorResponse) => {
          this.spinner.stop();
          this.isNetworkOperationDone = true;
          this.isExcelUploadDone = true;
          console.log("Client-side error occured......"+err.message);
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
}

}
