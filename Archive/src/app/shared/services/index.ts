import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient  } from '@angular/common/http';
import { Constants, DeseaseList, Desease,GeneralSettingsList } from "../../constant/constant";


@Injectable() 
export class Settings {
  readonly applicationName:string = 'Immunise Kochi';
  readonly loginApiUrl:string = 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/login';
  readonly testUrl:string = 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_getAllDesease';
  settingsData : GeneralSettingsList;
  constructor(private http: HttpClient ) 
  {}

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/text',
      'Access-Control-Allow-Origin': '*'

    })
  };
  
  doLoginPOST(postData) {
    console.log("POST......."+postData);
    this.http.post(this.loginApiUrl, postData ).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }

  getDiseases() 
  {
      this.http.get(this.testUrl).subscribe(data => {
      console.log(data);
    });
  }

   getGeneralSettings() 
  {
    this.http.get(Constants.getSettingsUrl)
            .map(res => res)
            .subscribe(
                data => {
                  this.settingsData = data as GeneralSettingsList;
                  console.log(JSON.stringify(this.settingsData.citieslist)+"....Dash Board page called.response....."+this.settingsData.vaccinationlist);
                  localStorage.setItem(Constants.GetCityKey, JSON.stringify(this.settingsData.citieslist));
                  localStorage.setItem(Constants.GetDeseaseKey, JSON.stringify(this.settingsData.deseaselist));
                  localStorage.setItem(Constants.GetVaccinationKey, JSON.stringify(this.settingsData.vaccinationlist));
                  localStorage.setItem(Constants.GetRecurringKey, JSON.stringify(this.settingsData.recurringtypelist));
                }
            );
  }

}