import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../router.animations';
import { SpinnerService } from '../shared/services/spinnerservice';
import { SpinnerComponent } from '../layout/spinner/spinner';
import { Constants, User, UserList,CityList,City,GeneralSettingsList,UserLogin } from "../constant/constant";


@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss'],
    animations: [routerTransition()]
})
export class UserListComponent implements OnInit {
    public adduser: FormGroup;
    isAddUserDone: Boolean;
    userListMaster: UserList;
    private modalAddDeseaseRef: NgbModalRef;
    currentSelected : User;
    userCityList: CityList
    userLogin: UserLogin
    public edituser: FormGroup;
    generalSettings:string;
    addUserDefaultCity:string;
    constructor(private fb: FormBuilder, private spinner: SpinnerService,
        private http: HttpClient, private modalService: NgbModal) { }
    ngOnInit() {
        this.userLogin = JSON.parse(localStorage.getItem(Constants.GetLoginDetails));
        this.createFormAddUser();
        this.createFormEditUser();
        this.getAllUserList();
        this.userCityList = JSON.parse(localStorage.getItem(Constants.GetCityKey)) ;
        this.addUserDefaultCity = this.userCityList[0].name;
        this.adduser.controls['cityID'].setValue(this.userCityList[0].idcity);
    }

    //Get All users Details
    getAllUserList() {
        this.spinner.start();
        this.http.post(Constants.userListUrl,JSON.stringify({userID : this.userLogin.userID, cityID : this.userLogin.cityID})).subscribe(
            (val) => {
                this.spinner.stop();
                this.userListMaster = val as UserList;
                if (this.userListMaster.status == 1) {
                   // this.modalAddDeseaseRef.close();
                } else {
                    this.isAddUserDone = true;
                }
                console.log(this.userListMaster.userlist + "----POST call successful value returned in body", this.userListMaster.status);
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


//Add Users
createFormAddUser() {
    this.adduser = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        contactNo: ['', Validators.required],
        cityID: ['', Validators.required],
        contact_person: ['', Validators.required],
        contact_mobile: ['', Validators.required],
        emailID: ['', Validators.required],
        password: ['', Validators.required]
    });
}
    //Add User Page
    addUserModelDisplay(content) {
        this.modalAddDeseaseRef = this.modalService.open(content);
    }

    onChange(selectedId: number)
{
     this.adduser.controls['cityID'].setValue(selectedId);
       console.log(selectedId+"...SELECTE......");
}


    addUserAction(values: NgForm) {
        console.log("Add Desease Action triggered......."+JSON.stringify(values.value));
        this.isAddUserDone = false;
        this.spinner.start();
        this.http.post(Constants.addNewVaccinationUrl, JSON.stringify(values.value)).subscribe(
            (val) => {
                this.spinner.stop();
                this.userListMaster = val as UserList;
                if (this.userListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddUserDone = true;
                }
                console.log(this.userListMaster.userlist + "----POST call successful value returned in body", this.userListMaster.status);
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


    //Edit User
    createFormEditUser() {
        this.edituser = this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            contactNo: ['', Validators.required],
            cityID: ['', Validators.required],
            contact_person: ['', Validators.required],
            contact_mobile: ['', Validators.required],
            emailID: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    editUserSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......"+JSON.stringify(values.value));
        this.isAddUserDone = false;
        this.spinner.start();
        this.http.post(Constants.updateUserUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.userListMaster = val as UserList;
                if (this.userListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddUserDone = true;
                }
                console.log(this.userListMaster.userlist + "----POST call successful value returned in body", this.userListMaster.status);
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

    editUserAction(vaccinationContent, vaccinationCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = vaccinationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(vaccinationContent);
        
    }

    //Delete Desease
    deleteUserAction(vaccinationContent, vaccinationCurrentselected) {
        console.log("...Edit Action....");
        this.currentSelected = vaccinationCurrentselected;
        this.modalAddDeseaseRef = this.modalService.open(vaccinationContent);
        
    }

    deleteUserSubmit(values: NgForm) {
        console.log(JSON.stringify(this.currentSelected)+",.....Add Desease Action triggered......");
        this.isAddUserDone = false;
        this.spinner.start();
        this.http.post(Constants.deleteUserUrl, JSON.stringify(this.currentSelected)).subscribe(
            (val) => {
                this.spinner.stop();
                this.userListMaster = val as UserList;
                if (this.userListMaster.status == 1) {
                    this.modalAddDeseaseRef.close();
                } else {
                    this.isAddUserDone = true;
                }
                console.log(this.userListMaster.userlist + "----POST call successful value returned in body", this.userListMaster.status);
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

    getUserCityDetails()
    {
        
    }

}



