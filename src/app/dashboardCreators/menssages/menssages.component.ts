import { MessagesModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menssages',
  templateUrl: './menssages.component.html',
  styleUrls: ['./menssages.component.css']
})
export class MenssagesComponent implements OnInit {

  messages: MessagesModel[] = []
  messageList: Array<any> = []

  pro: boolean = false
  constructor( private router: Router, private UserService: UserService) {}

  ngOnInit(): void {
    this.getCreator()
  }

  viewMessage(id:any){
    this.router.navigate(['perfil/messages/'+ id])
  }


  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (res)=>{
        this.messages = res.message;
        this.messages.map((item, index) => {
          item.id = index + 1;
        });
        this.messages = this.messages.reverse();
        this.pro = res.user.isPro
      },error: (err)=> {
        console.log(err)
      }
    })
  }
}
