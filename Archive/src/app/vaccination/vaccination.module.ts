import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVaccinationRoutingModule } from './vaccination-routing.module';
import { VaccinationComponent } from './vaccination.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'

@NgModule({
    imports: [SpinnerModule,CommonModule, ListVaccinationRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [VaccinationComponent]
})
export class VaccinationModule {}
