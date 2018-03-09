import {Component} from '@angular/core';
import { SpinnerService} from '../../shared/services/spinnerservice';
@Component({
  selector: 'spinner-component',
  'template': `<div *ngIf="active" class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>`
})
export class SpinnerComponent {
  public active: boolean;

  public constructor(spinner: SpinnerService) {
    spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }
}