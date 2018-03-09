import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListNotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SpinnerModule} from '../layout/spinner/spinner.module'


@NgModule({
    imports: [SpinnerModule,CommonModule, ListNotificationRoutingModule,ReactiveFormsModule,FormsModule,NgbModule.forRoot()],
    declarations: [NotificationComponent]
    
})
export class NotificationModule {}