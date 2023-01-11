import { ResponseI } from './../../models/users.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly url = environment.api;

  constructor( private http: HttpClient ) { }

  //user api
  login(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url + 'login', form)
  }

  SignUp(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url + 'register', form)
  }
  //token
  setToken(Token: string){
    localStorage.setItem('token', Token)
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
