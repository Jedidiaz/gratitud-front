import { infoPageModel } from './../../models/users.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  formSettings: FormGroup
  message = { message: '', color: 'black' };
  info!: infoPageModel
  constructor(private formbuilder: FormBuilder, private UserServices: UserService) {
    this.formSettings = formbuilder.group({
      acerca: ['', Validators.required],
      aviso: ['', Validators.required],
      reglas: ['', Validators.required],
      comision: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.UserServices.getGratitudInfo()
      .subscribe({
        next: (res)=> {
          console.log(res)
          this.formSettings.setValue({
            acerca: res.datainfo[0].acerca,
            aviso: res.datainfo[0].aviso,
            reglas: res.datainfo[0].reglas,
            comision: res.datainfo[0].comision,
          })
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

  sendSettings(){
    const form = new FormData()
    form.append('acerca', this.formSettings.value.acerca)
    form.append('aviso', this.formSettings.value.aviso)
    form.append('reglas', this.formSettings.value.reglas)
    form.append('comision', this.formSettings.value.comision)
    this.UserServices.configUpdate(form)
      .subscribe({
        next:(res)=> {
          if(res.response === 'Success'){
            this.message = {message: res.message!, color: 'green'}
          }
          else this.message = {message: res.message!, color: 'red'}
        }, error:(err)=> {
          console.log(err)
        }
      })
  }

}
