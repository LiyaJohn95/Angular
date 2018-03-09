import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccinationgivenreportingComponent} from './vaccinationgivenreporting.component';

const routes: Routes = [
    {
        path: '',
        component: VaccinationgivenreportingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VaccinationGivenReportingRoutingModule {}
