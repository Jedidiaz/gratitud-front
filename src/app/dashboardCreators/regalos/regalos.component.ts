import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regalos',
  templateUrl: './regalos.component.html',
  styleUrls: ['./regalos.component.css']
})
export class RegalosComponent implements OnInit {
  money: any
  pro: boolean = false
  formRetiro: FormGroup
  message = {message: '', color: 'black', fontSize: '20px'}
  colorMoney = '#CBCBCB'

  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  constructor( private formbuilder: FormBuilder, private UserService: UserService) {
    this.formRetiro = formbuilder.group({
      retiro: [null, [Validators.required]],
      email: ['',  [Validators.required, Validators.pattern(this.validEmail)]],
    })
  }
  ngOnInit(): void {
    this.getCreator()
  }

  getCreator() {
    this.UserService.getInfo().subscribe({
      next: (el) => {
        this.money = el.user.money
        this.pro = el.user.isPro
        if (this.pro)this.colorMoney = '#F36A6A'
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //solicitar retiro
  withdraw(){
    const form = new FormData()
    form.append('email', this.formRetiro.value.email)
    form.append('monto', this.formRetiro.value.retiro)
    this.UserService.postWithdraw(form)
      .subscribe({
        next: (res)=> {
          if (res.response != 'Error'){
            this.message.message = res.message!
            this.message.color = 'green'
            this.getCreator()
          }else {
            this.message.message = res.message!
            this.message.color = 'red'
          }
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
