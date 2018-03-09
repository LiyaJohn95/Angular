import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccinationexceluploadComponent } from './vaccinationexcelupload.component';

const routes: Routes = [
    {
        path: '',
        component: VaccinationexceluploadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VaccinationExcelRoutingModule {}
