import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menssages',
  templateUrl: './menssages.component.html',
  styleUrls: ['./menssages.component.css']
})
export class MenssagesComponent implements OnInit {

  messageList: Array<any> = []
  constructor( private router: Router) {}

  ngOnInit(): void {
    for (let i = 10; i >= 1; i--){
      this.messageList.push({
        id: i,
        name: 'Areli Barreto',
        view: false
      })
    }
    console.log(this.messageList)
  }

  viewMessage(id:any){
    this.router.navigate(['/messages/'+ id])
  }

}
