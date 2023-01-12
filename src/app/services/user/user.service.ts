import { ResponseI } from './../../models/users.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  private readonly url = environment.api + 'user/';
  private readonly urlAdmin = environment.api + 'admin/';

  constructor( private http: HttpClient ) { }

  //user api
  login(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url + 'login', form)
  }

  SignUp(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.urlAdmin + 'register', form)
  }
  //token
  setToken(Token: string){
    localStorage.setItem('token', Token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  //admin
  getcreators():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}seeu`, {headers: this.headers})
  }

  deleteUser(email:string):Observable<any>{
    return this.http.delete<any>(`${this.url}deleteu/${email}`, {headers: this.headers})
  }

}
