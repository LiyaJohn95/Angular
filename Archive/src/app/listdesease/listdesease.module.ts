import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListDeseaseRoutingModule } from './listdesease-routing.module';
import { ListdeseaseComponent } from './listdesease.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, ListDeseaseRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [ListdeseaseComponent]
})
export class DeseaseModule {}
