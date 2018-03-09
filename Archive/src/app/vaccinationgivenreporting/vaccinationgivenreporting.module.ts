import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VaccinationGivenReportingRoutingModule } from './vaccinationgivenreporting-routing.module';
import { VaccinationgivenreportingComponent } from './vaccinationgivenreporting.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, VaccinationGivenReportingRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [VaccinationgivenreportingComponent]
    
})
export class VaccinationGivenReportingModule {}