import { SpinnerService } from './../../services/spinner/spinner.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { finalize, Observable } from 'rxjs';

@Injectable()

export class spinnerInterceptor implements HttpInterceptor{
    constructor(private spinnersrv: SpinnerService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnersrv.show();
    return next.handle(req).pipe(
        finalize( () => this.spinnersrv.hide())
    );
  }

}
