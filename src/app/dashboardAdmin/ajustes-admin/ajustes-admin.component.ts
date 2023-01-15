import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajustes-admin',
  templateUrl: './ajustes-admin.component.html',
  styleUrls: ['./ajustes-admin.component.css']
})
export class AjustesAdminComponent implements OnInit {

  formAjustes: FormGroup;
  formPassword: FormGroup

  Verify = false
  message = { message: '', color: 'black' }
  messageA = { message: '', color: 'black' }
  constructor( private formBuilder: FormBuilder, private UserService: UserService) {
    this.formAjustes = formBuilder.group({
      año: ['', Validators.required],
      mes: ['', Validators.required],
    })

    this.formPassword = formBuilder.group({
      passwordA: ['', [Validators.required, Validators.minLength(5)]],
      passwordN: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit(): void {
  }

  //update
  updatePassword(){
    const form = new FormData()
    form.append('passwordOld', this.formPassword.value.passwordA)
    form.append('passwordNew1', this.formPassword.value.passwordN)
    form.append('passwordNew2', this.formPassword.value.repeatPassword)
    this.UserService.updatePasswordAdmin(form)
      .subscribe({
        next: (res)=>{
          if(res.response === 'Success'){
            this.message = {message: res.message!, color: 'green'}
            this.formPassword.reset()
          }
          else this.message = {message: res.message!, color: 'red'}
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

  //update price
  updatePrice(){
    const form = new FormData()
    form.append('year', this.formAjustes.value.año)
    form.append('month', this.formAjustes.value.mes)
    this.UserService.updatePriceAdmin(form)
      .subscribe({
        next: (res)=>{
          if(res.response === 'Success'){
            this.messageA = {message: res.message!, color: 'green'}
            this.formPassword.reset()
          }
          else this.messageA = {message: res.message!, color: 'red'}
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
