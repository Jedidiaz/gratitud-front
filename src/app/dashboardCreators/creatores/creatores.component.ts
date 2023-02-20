import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreatorModel } from 'src/app/models/users.interface';

@Component({
  selector: 'app-creatores',
  templateUrl: './creatores.component.html',
  styleUrls: ['./creatores.component.css']
})
export class CreatoresComponent implements OnInit {

  infoCreator!: string
  ImageCreator!: string
  money: any
  colorMoney = '#CBCBCB'
  urlPag = environment.urlPage
  admin!: boolean

  pro: boolean = true
  constructor(private UserService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCreator()    
  }

  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (res)=>{
        if(res.user.isAdmin) window.location.href  = "/admin"
        this.infoCreator = res.user.username
        this.ImageCreator = res.user.imgpro.filePath
        this.pro = res.user.isPro
        this.money = res.user.money
        if (this.pro)this.colorMoney = '#F36A6A'
      },error: (err)=> {
        window.location.href="/login"
      }
    })
  }

  salir(){
    localStorage.removeItem('token')
    window.location.href="/"
  }

}
