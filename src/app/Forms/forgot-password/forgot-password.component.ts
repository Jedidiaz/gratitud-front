import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  formRegister: FormGroup;
  messageError: any;
  token: any
  message= {message: '' ,color: '#fff'}
  constructor(private formbuilder: FormBuilder, private userService: UserService, private _router: ActivatedRoute ) {
    this.formRegister = formbuilder.group({
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._router.queryParams.subscribe({
      next: (res)=> {this.token = res}
    })

  }

  register() {
    const form = new FormData()
    form.append('password', this.formRegister.value.password)
    form.append('password2', this.formRegister.value.passwordRepeat)

    this.userService.resetPassword(form, this.token).subscribe({
      next: (res)=> {
        if (res.response === 'Success'){
          this.message.message = res.message!
          this.message.color = 'green'
          window.location.href = "/"
        }else {
          this.message.message = res.message!
          this.message.color = 'red'
        }
      },error: (err)=> {
        console.log(err)
      }
    })
  }
}
