export class Constants {
    //For Settings
    public static get GetCityKey(): string { return "getcitydetails"; };
    public static get GetDeseaseKey(): string { return "getDeaseDetails"; };
    public static get GetVaccinationKey(): string { return "getvaccination"; };
    public static get GetRecurringKey(): string { return "getRecurring"; };
    //For Login Page
    public static get LoginStatusKey(): string { return "isLoggedin"; };
    public static get loginApiUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/login'; };
    public static get GetLoginDetails(): string { return "getUserDetails"; };

    //For Desease Page
    public static get deseaseListUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_getAllDesease'; };

    //For Add Desease Page
    public static get addDeseaseUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_addDeseaseDetails'; };

    //For Update Deseae Page
    public static get updateDeseaseUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_updateDesease'; };

    //For Delete Desease Page
    public static get deleteDeseaseUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_deleteDesease'; };

    //For Get All Vaccination Details
    public static get vaccinationListUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/getVaccinationdetails'; };

    //For Add new Vaccination Details
    public static get addNewVaccinationUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_addVaccination'; };

    //For update Vaccination Details
    public static get updateVaccinationUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_updateVaccination'; };

    //For update Vaccination Details
    public static get deleteVaccinationUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_deleteVaccination'; };


    //For Get All Vaccination Details
    public static get userListUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_getUserslist'; };

    //For Add new Vaccination Details
    public static get addNewuserUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_createUserDetails'; };

    //For update Vaccination Details
    public static get updateUserUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_updateUsersDetails'; };

    //For update Vaccination Details
    public static get deleteUserUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_delateUsers'; };

    public static get getSettingsUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/generalSettings'; };

    //For Get All Vaccination Details
    public static get vaccinationScheduleListUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/getVaccinationSchedule'; };

    //For Add new Vaccination Details
    public static get vaccinationScheduleAddNewUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_vaccinationSchedule'; };

    //For update Vaccination Details
    public static get vaccinationScheduleUpdateUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_updateVacciSchedule'; };

    //For update Vaccination Details
    public static get vaccinationScheduleDeleteUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_deleteVacciSchedule'; };

    //For List All reported Disease
    public static get reportedDiseaselistUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/get_allDeseaseReported'; };

    //For report a new disease
    public static get reportDiseaseaddUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/user_addDesease'; };

    //For Get All Notification Details
    public static get notificationListUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_getallNotification'; };

    //For Add new Notification Details
    public static get notificationAddNewUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_addNotification'; };

    //For update Notification Details
    public static get notificationUpdateUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_updateNotification'; };

    //For update Notification Details
    public static get notificationDeleteUrl(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/admin_deleteNotification'; };

    //For Get currently scheduled vaccination
    public static get reportCurrentVaccinationList(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/user_VacciGiven'; };

    public static get currentVaccinationReportURL(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/currentVaccinationScheduledList'; };

    public static get uploadExcelSheetURL(): string { return 'http://ec2-52-201-223-0.compute-1.amazonaws.com:8080/IMA_ServerAPI/ExcelUpload'; };

}

export class Desease {
    constructor(public deseaseID: number, public name: string, public remarks: string) {
    }
}

export class DeseaseList {
    constructor(public deseaselist: Array<Desease>, public status: number, public message: string) {

    }
}



export class Vaccination {
    constructor(public idvaccination: number, public name: string, public description: string) {
    }
}

export class VaccinationList {
    constructor(public vaccinationlist: Array<Vaccination>, public status: number, public message: string) {

    }
}

export class User {
    constructor(public userID: number, public name: string, public address: string, public contactNo: string, public cityID: number
        , public contact_person: string, public contact_mobile: string, public emailID: string, public password: string,
        public roleID: number, public status: number, public isNotification: number, public cityname: string) {

    }
}

export class UserList {
    constructor(public userlist: Array<User>, public status: number, public message: string) { }
}


//For Application gereral Settings

export class City {
    constructor(public idcity: number, public name: string) { }
}

export class CityList {
    constructor(public citieslist: Array<City>) { }
}



// For General Settings
export class GeneralSettingsList {
    constructor(public citieslist: Array<City>, public deseaselist: Array<Desease>,
        public vaccinationlist: Array<Vaccination>, public recurringtypelist: Array<Recurring>) {

    }
}


// For vaccination Schedule

export class VaccinationScheduleList {
    constructor(public vaccishedule: Array<ScheduleVaccination>, public status: number, public message: string) {

    }
}

export class ScheduleVaccination {
    constructor(public idshedule: number, public createdOn: string, public sheduledOn: string, public cityID: number,
        public description: string, public remarks: string, public idvaccination: number, public name: string, public cname: string) {

    }
}

export class UserLogin {
    constructor(public userID: number, public name: string, public address: string, public contact_person: number,
        public contact_mobile: number, public emailID: string, public roleID: number, public message: string, public isNotification: number, public cityID: number
        , public status: number) {
    }
}


export class ReportedDisease {
    constructor(public reportedOn: string, public remarks: string, public name: string, public deseaseID: number, public idcity: number,
        public city_name: string, public user_name: string) {

    }
}

export class ReportediseaseList {
    constructor(public deseasereplist: Array<ReportedDisease>, public status: number, public message: string) {

    }
}


export class Notfications {
    constructor(public message: string, public id: number, public type: number, public cityID: number
        , public vID: number, public recurring_type: number,
        public firedOn: string, public createdBy: number,public vaccinationName:string,public recurringName:string ) {

    }
}

export class NotificationList {
    constructor(public notification: Array<Notfications>, public status: number, public message: string) { }
}


export class Recurring {
    constructor(public id: number, public name: string) {

    }
}

export class RecurringList {
    constructor(public recurringtypelist: Array<Recurring>) {

    }
}

export class VaccinationGiven {
    constructor(public uID: number, public vaccID: number, public name: string,public address: string
        ,public emailid: string,public mobile: number,public gender: number,public age: number, 
        public cityID: number, 

    ) {

    }
}

export class GeneralResponse {
    constructor(public status: string, public message: string) {

    }
}







