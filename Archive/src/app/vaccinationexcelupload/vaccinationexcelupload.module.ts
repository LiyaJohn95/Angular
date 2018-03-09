import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VaccinationExcelRoutingModule } from './vaccinationexcelupload-routing.module';
import { VaccinationexceluploadComponent } from './vaccinationexcelupload.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, VaccinationExcelRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [VaccinationexceluploadComponent]
})
export class VaccinationExcelModule {}
