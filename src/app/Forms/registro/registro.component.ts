import { UserService } from './../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup;
  value = 'hola';
  //mesage error
  messageError = {message: '', color: '#fff'}
  username: any = ''

  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  Verify = false

  siteKey: string = '6LexeT0kAAAAALzgSUlQAJz0-I3NhnXAo_PE-gh7'
  constructor( private formBuilder: FormBuilder, private UserService: UserService, private _router: ActivatedRoute) {
    this.formRegister = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      recaptcha: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.username = this._router.snapshot.paramMap.get('username');
  }

  register(){
    console.log(this.formRegister.value.recaptcha)
    if(this.formRegister.valid){
      const form = new FormData()
      form.append('name', this.formRegister.value.name)
      form.append('email', this.formRegister.value.email.toLowerCase())
      form.append('password', this.formRegister.value.password)
      form.append('username', this.username.toLowerCase())
      form.append('token', this.formRegister.value.recaptcha)
      this.UserService.SignUp(form).subscribe({
        next: (res)=> {
          if(res.response === 'Success'){
            this.messageError.message = res.message!
            this.messageError.color = 'green'
            this.Verify = true
          }else{
            this.messageError.message = res.message!
            this.messageError.color = 'red'
          }
        },error: (err)=> {
        }
      })
    }
  }

  

}
