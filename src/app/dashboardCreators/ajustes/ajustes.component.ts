import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  email!: string
  formAjuste: FormGroup
  pro: boolean = false
  cancelado: boolean = false
  fecha: any

  message = {message: '', color: 'black'}
  messagePass = {message: '', color: 'black'}
  constructor( private formbuilder: FormBuilder, private UserService: UserService) {
    this.formAjuste = formbuilder.group({
      passwordA: ['', [Validators.required, Validators.minLength(5)]],
      passwordN: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit(): void {
    this.getCreator()
    this.seeCancel()
  }

  verifyView(){
  }

  //get creators
  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (res)=>{
        this.email = res.user.email
        this.pro = res.user.isPro
        this.fecha = res.user.dateF
        console.log(res)
      },error: (err)=> {
        console.log(err)
      }
    })
  }

  //ver cancelar sub
  seeCancel(){
    this.UserService.seecancel().subscribe({
      next: (res)=>{
        if (res.response === "Success") this.cancelado = true
      },error: (err)=> {
        console.log(err)
      }
    })
  }

  //cancelar sub
  cancelar(){
    window.location.href = "/cancelar"
  }

  //update
  updatePassword(){
    const form = new FormData()
    form.append('passwordOld', this.formAjuste.value.passwordA)
    form.append('passwordNew1', this.formAjuste.value.passwordN)
    form.append('passwordNew2', this.formAjuste.value.repeatPassword)
    this.UserService.updatePassword(form)
      .subscribe({
        next: (res)=>{
          if(res.response === 'Success'){
            this.message = {message: res.message!, color: 'green'}
            this.formAjuste.reset()
          }
          else this.message = {message: res.message!, color: 'red'}
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

  //recoverypass
  recovery(){
    const form = new FormData();
    form.append('email', this.email)

    this.UserService.sendEmailPassword(form).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messagePass.message = res.message!;
          this.messagePass.color = 'green';
        } else {
          this.messagePass.message = res.message!;
          this.messagePass.color = 'red';
        }
      },
      error: (err) => {},
    });
  }

}
