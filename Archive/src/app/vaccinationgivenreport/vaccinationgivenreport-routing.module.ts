import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccinationgivenreportComponent } from './vaccinationgivenreport.component';

const routes: Routes = [
    {
        path: '',
        component: VaccinationgivenreportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VaccinationGivenReportRoutingModule {}
