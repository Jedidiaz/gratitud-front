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
  constructor( private router: Router, private UserService: UserService) {}

  ngOnInit(): void {
    this.getCreator()
  }

  viewMessage(id:any){
    this.router.navigate(['/messages/'+ id])
  }


  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (res)=>{
        res.message.map((el, index)=> {
          this.messages.push({
            description: el.description,
            email: el.email,
            name: el.name,
            nameUser: el.nameUser,
            title: el.title,
            __v: el.__v,
            _id: el._id,
            id: index + 1
          })
        })
        console.log(this.messages)
      },error: (err)=> {
        console.log(err)
      }
    })
  }
}
