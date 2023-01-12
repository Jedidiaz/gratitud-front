import { UserService } from './../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup;
  value = 'hola';
  //mesage error
  messageError:string= ''

  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  Verify = false
  constructor( private formBuilder: FormBuilder, private UserService: UserService) {
    this.formRegister = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit(): void {
  }

  register(){
    if(this.formRegister.valid){
      const form = new FormData()
      form.append('name', this.formRegister.value.name)
      form.append('email', this.formRegister.value.email)
      form.append('password', this.formRegister.value.password)
      form.append('username', 'test')
      this.UserService.SignUp(form).subscribe({
        next: (el)=> {
          console.log(el)
          this.Verify = true
        },error: (err)=> {
          if(err.status === 500)this.messageError = '*Imagen requerida*'
          console.log(err)
        }
      })
    }
  }

}
