import { ResponseI, ResponseInfoModel } from './../../models/users.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + localStorage.getItem('token'))

  private readonly url = environment.api + 'user/';
  private readonly urlAdmin = environment.api + 'admin/';
  private readonly urlUser = environment.api;

  constructor( private http: HttpClient ) { }

  //user api
  login(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url + 'login', form)
  }

  SignUp(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(this.url + 'register', form)
  }

  authGet(token: string):Observable<ResponseI>{
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')

    const params = new HttpParams()
      .append('token', token)

    return this.http.get<ResponseI>(`${this.url}valid`, {
      headers: headers,
      params: params
    })
  }

  getInfoPage(username: {}):Observable<ResponseInfoModel>{
    return this.http.get<ResponseInfoModel>(`${this.url}data/${username}`)
  }

  //mensages
  postMessages(username: string, body: FormData):Observable<ResponseI>{
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')

    const params = new HttpParams()
      .append('username', username)

    return this.http.post<ResponseI>(`${this.urlUser}message`, body, {
      headers: headers,
      params: params
    })
  }

  //creators
  editBio(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}editinfo`, form, {
      headers: this.headers
    })
  }

  editRedes(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}editsn`, form, {
      headers: this.headers
    })
  }

  getInfo():Observable<ResponseInfoModel>{
    console.log(this.getToken())
    return this.http.get<ResponseInfoModel>(`${this.urlUser}profile/data`, {headers: this.headers})
  }

  //token
  setToken(Token: string){
    localStorage.setItem('token', Token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  verifyURL(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}verify`, form)
  }

  //admin
  getcreators():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.urlAdmin}seeu`, {headers: this.headers})
  }

  deleteUser(email:string):Observable<any>{
    return this.http.delete<any>(`${this.urlAdmin}deleteu/${email}`,  {headers: this.headers})
  }

}
