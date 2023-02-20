import { ResponseHomeUsersModel, responseGetInfoHomeModel } from './../../models/homeModel.interface';
import { saveAs } from 'file-saver';
import { ResponseI, ResponseInfoModel, ResponseMessageModel, ResponseGetAdmin, ResponseGetAdminTemp, ResponsePackModel, ResponseInfoPageModel } from './../../models/users.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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

  recoveryPassword(form: FormData):Observable<ResponseI>{
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
  postMessages(body: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.urlUser}message`, body)
  }

  getMessagesById(id: string):Observable<ResponseMessageModel>{
    return this.http.get<ResponseMessageModel>(`${this.url}message/${id}`, {
      headers: this.headers
    })
  }

  getPacks():Observable<ResponsePackModel>{
    return this.http.get<ResponsePackModel>(`${this.url}rewards`)
  }

  getFile(name: string, url: string, type: string){
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap(content =>{
        const blob = new Blob([content], {type})
        saveAs(blob, name)
      }),
      map(()=> true)
    )
  }

  //home

  getCreatorHome():Observable<ResponseHomeUsersModel>{
    return this.http.get<ResponseHomeUsersModel>(`${this.urlUser}home/recently`)
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
    return this.http.get<ResponseInfoModel>(`${this.urlUser}profile/data`, {headers: this.headers})
  }

  getGratitudInfo():Observable<ResponseInfoPageModel>{
    return this.http.get<ResponseInfoPageModel>(`${this.urlAdmin}info`, {headers: this.headers})
  }

  updateImg(image: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}editp`, image,{headers: this.headers})
  }

  postWithdraw(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.urlUser}withdraw`, form, {headers: this.headers})
  }

//stripe
  postDonationStripe(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.urlUser}success`, form)
  }

  postSubStripe(form: FormData):Observable<any>{
    return this.http.put<any>(`${this.urlUser}subSuccess`, form)
  }

  cancelarSub():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}paysuspend`, {headers: this.headers})
  }

  //uploadPack
  uploadPack(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.urlUser}upload/rewards`, form, {headers: this.headers})
  }

  //update password
  updatePassword(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}passwordChange`, form, {headers: this.headers})
  }

  resetPassword(form: FormData, token: any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}reset`, form, {
      params: token
    })
  }

  sendEmailPassword(form: FormData){
    return this.http.post<ResponseI>(`${this.url}reset`, form)
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
  getcreators():Observable<ResponseGetAdmin>{
    return this.http.get<any>(`${this.urlAdmin}seeu`, {headers: this.headers})
  }

  getcreatorsPro():Observable<ResponseGetAdmin>{
    return this.http.get<any>(`${this.urlAdmin}seepro`, {headers: this.headers})
  }

  getProByEmail(email: string):Observable<ResponseGetAdmin>{
    return this.http.get<any>(`${this.urlAdmin}oneUT/${email}`, {headers: this.headers})
  }

  getRequestWithdraw():Observable<ResponseGetAdmin>{
    return this.http.get<any>(`${this.urlAdmin}seer`, {headers: this.headers})
  }

  getCreatorsProHistory(email: string):Observable<ResponseGetAdmin>{
    return this.http.get<any>(`${this.urlAdmin}oneUT/${email}`, {headers: this.headers})
  }

  getUsers():Observable<ResponseGetAdminTemp>{
    return this.http.get<ResponseGetAdminTemp>(`${this.urlAdmin}seem`, {headers: this.headers})
  }

  deleteUser(email:string):Observable<ResponseGetAdmin>{
    return this.http.delete<ResponseGetAdmin>(`${this.urlAdmin}deleteu/${email}`,  {headers: this.headers})
  }
  //ajustes admin
  updatePasswordAdmin(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.urlAdmin}passwordChange`, form, {headers: this.headers})
  }

  updatePriceAdmin(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.urlAdmin}price`, form, {headers: this.headers})
  }

  updatePayPro(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.urlAdmin}pay`, form, {headers: this.headers})
  }

  ConvertPro(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.urlAdmin}convertPRO`, form, {headers: this.headers})
  }

  boletinUpdate(form: FormData):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.urlAdmin}boletin`, form, {headers: this.headers})
  }

  configUpdate(form: FormData):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.urlAdmin}info`, form, {headers: this.headers})
  }

  getDonationAmount():Observable<ResponseGetAdmin>{
    return this.http.get<ResponseGetAdmin>(`${this.urlAdmin}amountd`, {headers: this.headers})
  }


  //mesagges services
  destacar(id: any):Observable<ResponseI>{
    const body = {}
    return this.http.put<ResponseI>(`${this.url}like/${id}`, body, {
      headers: this.headers
    })
  }

  visible(id: any):Observable<ResponseI>{
    const body = {}
    return this.http.put<ResponseI>(`${this.url}seemessage/${id}`, body, {
      headers: this.headers
    })
  }

  eliminar(id: any):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}delmessage/${id}`, {
      headers: this.headers
    })
  }

  //infoHome
  infoHome(form: any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.urlAdmin}home`, form,{
      headers: this.headers
    })
  }

  infoHomePhoto(form: any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.urlAdmin}homeimg`, form,{
      headers: this.headers
    })
  }

  getInfoHome():Observable<responseGetInfoHomeModel>{
    return this.http.get<responseGetInfoHomeModel>(`${this.urlUser}home/info`,{
      headers: this.headers
    })
  }

  seecancel():Observable<any>{
    return this.http.get<any>(`${this.url}cancelsub`,{
      headers: this.headers
    })
  }

}
