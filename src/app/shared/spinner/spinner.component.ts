import { SpinnerService } from './../../services/spinner/spinner.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-heart"><div>
  </div>
   `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) { }


}
