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

  infoCreator!: CreatorModel;
  MessagesCreator!: MessagesModel[];
  cards: Array<any> = []
  constructor(private UserService: UserService, private _router: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const username = this._router.snapshot.paramMap.get('username')
    for (let i = 0; i < 6; i++){
      this.cards.push({
        name: 'Daniela Correa',
        clase: 'Una clase super maravillosa!',
        image: '../../../assets/danielacorrea.png',
        description: '"Ame los procesos, me encantaron, los llevo a todos lados, no solo me sirvieron para sanar mi alma, sino para despedir muchos bloqueos que me estaban destruyendo."',
        nameFollow: 'John Doe',
        rating: 3
      })
    }
    this.getInfo(username)
  }

  getInfo(username: any){
    this.UserService.getInfoPage(username)
    .subscribe({
      next: (res)=> {
        this.infoCreator = res.user
        this.MessagesCreator = res.message
        console.log(this.infoCreator.imgpro)
      }, error: (err)=> {
        console.log(err)
        // this.router.navigate(['/'])
      }
    })
  }

}
