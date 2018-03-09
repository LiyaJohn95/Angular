import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from './spinner'
import { SpinnerService} from '../../shared/services/spinnerservice';

@NgModule({
    imports: [CommonModule],
    declarations: [SpinnerComponent],
    providers: [SpinnerService],
    exports: [SpinnerComponent]
})
export class SpinnerModule {}
