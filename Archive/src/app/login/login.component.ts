import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpHeaders,HttpClient,HttpErrorResponse  } from '@angular/common/http';

import {Settings} from '../shared/services/index'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SpinnerService} from '../shared/services/spinnerservice';
import {SpinnerComponent} from '../layout/spinner/spinner'
import { Constants,UserLogin } from "../constant/constant";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})


export class LoginComponent implements OnInit {
   login: FormGroup;
   jsonData:string;
   user :UserLogin;
   isLoginClicked : Boolean;
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(public router: Router,public fb: FormBuilder, public app: Settings, 
        public spinner : SpinnerService, public http: HttpClient)
     {

     }

    ngOnInit() {
        this.createForm();
        
    }

    createForm() {
        this.login = this.fb.group({
            emailID: ['', [Validators.required,Validators.pattern(this.emailPattern)] ],
            password: ['', Validators.required ]
        });
      }

    onLoggedin(values) {
        this.isLoginClicked = false;
        this.spinner.start();
        console.log("....Login Input...."+JSON.stringify(values));
       this.http.post(Constants.loginApiUrl, JSON.stringify(values) ).subscribe(
        (val) => {
            this.spinner.stop();
            this.user = val as UserLogin;
            if(this.user.userID > 0 && this.user.status > 0){
                localStorage.setItem(Constants.LoginStatusKey, 'true');
                localStorage.setItem(Constants.GetLoginDetails, JSON.stringify(val));
                this.router.navigate(['/dashboard']);
            }else
            {
                this.isLoginClicked = true;
            }
            console.log("POST call successful value returned in body", this.user.status);
        },
        (err: HttpErrorResponse) => {
            this.spinner.stop();
            this.isLoginClicked = true;
            localStorage.setItem(Constants.LoginStatusKey, 'false');
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });
    }
}


