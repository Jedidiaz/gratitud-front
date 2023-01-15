import { ResponseMessageModel, MessagesModel } from './../../models/users.interface';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  user: any
  name: any
  description: any
  title: any

  card: Array<any> = []
  constructor(private UserService: UserService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    console.log(id)
    this.card.push({
      name: 'Daniela Correa',
      clase: 'Una clase super maravillosa!',
      image: '../../../assets/danielacorrea.png',
      description: '"Ame los procesos, me encantaron, los llevo a todos lados, no solo me sirvieron para sanar mi alma, sino para despedir muchos bloqueos que me estaban destruyendo."',
      nameFollow: 'John Doe',
      rating: 3,
      select: false,
      like: false
    })
    this.getMessage(id)
  }

  getMessage(id:any){
    this.UserService.getMessagesById(id)
      .subscribe({
        next: (res)=> {
          this.user = res.user
          this.name = res.data?.name
          this.description = res.data?.description
          this.title = res.data?.title
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
