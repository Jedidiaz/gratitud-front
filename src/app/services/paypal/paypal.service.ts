import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  private url = environment.api;

  constructor(private http: HttpClient) {}

  create(body: FormData): Observable<any> {
    return this.http.post<any>(`${this.url}orders`, body)
  }


}
