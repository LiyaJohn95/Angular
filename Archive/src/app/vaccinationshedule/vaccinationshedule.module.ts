import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VaccinationSheduleRoutingModule } from './vaccinationshedule-routing.module';
import { VaccinationsheduleComponent } from './vaccinationshedule.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, VaccinationSheduleRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [VaccinationsheduleComponent]
})
export class VaccinationScheduleModule {}
