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

  constructor( private formBuilder: FormBuilder, private userApi: UserService, private router: Router) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
   }

  ngOnInit(): void {
  }

  click(){

  }

  login(){
    if (this.formLogin.valid){
      const formDataAuth = new FormData()
      formDataAuth.append('email', this.formLogin.value.email)
      formDataAuth.append('password', this.formLogin.value.password)
      this.userApi.login(formDataAuth).subscribe({
        next: (re) => {
          localStorage.setItem('token', re.token!)
          if (re.isAdmin)this.router.navigate(['/admin'])
          else this.router.navigate([''])
        }, error: (err) => {
          alert(err)
          this.formLogin.reset()
        }
      })
    }
  }

}
