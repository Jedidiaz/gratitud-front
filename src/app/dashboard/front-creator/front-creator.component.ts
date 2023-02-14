import { CreatorModel, MessagesModel } from './../../models/users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

import { NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-front-creator',
  templateUrl: './front-creator.component.html',
  styleUrls: ['./front-creator.component.css']
})
export class FrontCreatorComponent implements OnInit {

  infoCreator!: CreatorModel
  MessagesCreator!: MessagesModel[];
  cards: Array<any> = []
  color = '#b3b3b3'
  constructor(private UserService: UserService, private _router: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const username = this._router.snapshot.paramMap.get('username')
    this.getInfo(username)
  }

  getInfo(username: any){
    this.UserService.getInfoPage(username)
    .subscribe({
      next: (res)=> {
        console.log(res)
        this.infoCreator = res.user
        this.MessagesCreator = res.message
        this.MessagesCreator.map((item) => {
          if(item.like) item.color = '#F36A6A'
          else item.color = '#b3b3b3'
        });
        console.log(this.infoCreator.imgpro)
      }, error: (err)=> {
        window.location.href="/"
      }
    })
  }

}
