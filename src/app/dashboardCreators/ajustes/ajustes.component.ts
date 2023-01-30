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

  message = {message: '', color: 'black'}
  constructor( private formbuilder: FormBuilder, private UserService: UserService) {
    this.formAjuste = formbuilder.group({
      passwordA: ['', [Validators.required, Validators.minLength(5)]],
      passwordN: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit(): void {
    this.getCreator()
  }

  verifyView(){
  }

  //get creators
  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (res)=>{
        this.email = res.user.email
        this.pro = res.user.isPro
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

}
