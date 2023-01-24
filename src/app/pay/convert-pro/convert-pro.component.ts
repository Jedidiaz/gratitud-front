import { CreatorModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-pro',
  templateUrl: './convert-pro.component.html',
  styleUrls: ['./convert-pro.component.css']
})
export class ConvertProComponent implements OnInit {
  formPay: FormGroup

  pay: boolean = false
  selected = '0'
  username = ''

  constructor(private formbuilder: FormBuilder, private userService: UserService) {
    this.formPay = this.formbuilder.group({
      proM: [null, Validators.required]
    })


   }

  ngOnInit(): void {
    this.getData()
  }

  select($event: any){
    this.selected = $event.target.value
  }

  pagar(){
    this.pay = true
  }

  //getData
  getData(){
    this.userService.getInfo()
      .subscribe({
        next: (res)=> {
          this.username = res.user.username
          if(res.user.isPro) window.location.href = '/perfil'
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
