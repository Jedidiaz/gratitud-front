import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lo',
  templateUrl: './lo.component.html',
  styleUrls: ['./lo.component.css']
})
export class LoComponent implements OnInit {
  formLogin: FormGroup;
  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  messageError = {message: '', color: 'black'}

  constructor( private formBuilder: FormBuilder, private userApi: UserService, private router: Router) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
   }

  ngOnInit(): void {
    if(localStorage.getItem('token')) window.location.href = "/perfil"
  }

  login(){
    if (this.formLogin.valid){
      const formDataAuth = new FormData()
      formDataAuth.append('email', this.formLogin.value.email.toLowerCase())
      formDataAuth.append('password', this.formLogin.value.password)
      this.userApi.login(formDataAuth).subscribe({
        next: (res) => {
          console.log(res)
          localStorage.setItem('token', res.token!)
          if(res.response === 'Success'){
            this.messageError = {message: res.message!, color: 'green'}
            if (res.isAdmin) {
              window.location.href="/admin"
              console.log(res.isAdmin)
            }else  window.location.href="/perfil";
          }
          else this.messageError = {message: res.message!, color: 'red'}; this.formLogin.reset();
        }, error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
