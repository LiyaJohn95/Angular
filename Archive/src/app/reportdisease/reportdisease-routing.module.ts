import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportdiseaseComponent } from './reportdisease.component';

const routes: Routes = [
    {
        path: '',
        component: ReportdiseaseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportDiseaseRoutingModule {}
