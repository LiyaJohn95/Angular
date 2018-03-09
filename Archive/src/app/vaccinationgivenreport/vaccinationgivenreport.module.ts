import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VaccinationGivenReportRoutingModule } from './vaccinationgivenreport-routing.module';
import { VaccinationgivenreportComponent } from './vaccinationgivenreport.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, VaccinationGivenReportRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [VaccinationgivenreportComponent]
    
})
export class VaccinationGivenReportModule {}