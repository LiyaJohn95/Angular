import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccinationsheduleComponent } from './vaccinationshedule.component';

const routes: Routes = [
    {
        path: '',
        component: VaccinationsheduleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VaccinationSheduleRoutingModule {}
