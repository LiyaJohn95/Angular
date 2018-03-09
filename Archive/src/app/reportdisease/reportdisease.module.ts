import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportDiseaseRoutingModule } from './reportdisease-routing.module';
import { ReportdiseaseComponent } from './reportdisease.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'

@NgModule({
    imports: [SpinnerModule,CommonModule,ReportDiseaseRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [ReportdiseaseComponent]
})
export class ReportDiseaseListModule {}
