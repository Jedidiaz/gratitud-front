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
  constructor(private formbuilder: FormBuilder, private UserServices: UserService) {
    this.formSettings = formbuilder.group({
      acerca: ['', Validators.required],
      aviso: ['', Validators.required],
      reglas: ['', Validators.required],
      comision: ['', Validators.required],
    })
   }

  ngOnInit(): void {
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
          console.log(res)
        }, error:(err)=> {
          console.log(err)
        }
      })
  }

}
