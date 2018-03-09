import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
//import {} from '../listdesease/listdesease.module'


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'listdesease', loadChildren: '../listdesease/listdesease.module#DeseaseModule' },
            { path: 'vaccination', loadChildren: '../vaccination/vaccination.module#VaccinationModule' },
            { path: 'userlist', loadChildren: '../listusers/userlist.module#UserListModule' },
            { path: 'schedule', loadChildren: '../vaccinationshedule/vaccinationshedule.module#VaccinationScheduleModule' },
            { path: 'reporteddisease', loadChildren: '../reportdisease/reportdisease.module#ReportDiseaseListModule' },
            { path: 'notification', loadChildren: '../notification/notification.module#NotificationModule' },
            { path: 'excelupload', loadChildren: '../vaccinationexcelupload/vaccinationexcelupload.module#VaccinationExcelModule' },
            { path: 'vaccinationreport', loadChildren: '../vaccinationgivenreport/vaccinationgivenreport.module#VaccinationGivenReportModule' },
            { path: 'reportvaccination', loadChildren: '../vaccinationgivenreporting/vaccinationgivenreporting.module#VaccinationGivenReportingModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
