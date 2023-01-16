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

  pro: boolean = true
  constructor(private UserService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCreator()
  }

  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (el)=>{
        this.infoCreator = el.user.username
        this.ImageCreator = el.user.imgpro.filePath
        this.pro = el.user.isPro
        this.money = el.user.money
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
