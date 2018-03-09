import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'

@NgModule({
    imports: [CommonModule, LoginRoutingModule,ReactiveFormsModule,FormsModule,SpinnerModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
