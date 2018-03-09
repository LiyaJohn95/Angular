import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListUserRoutingModule } from './userlist-routing.module';
import { UserListComponent } from './userlist.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, ListUserRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [UserListComponent]
})
export class UserListModule {}
