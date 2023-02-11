import { ResponseMessageModel, MessagesModel, imageProModel } from './../../models/users.interface';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';


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
  image: any
  idE: any

  card: Array<any> = []
  constructor(private UserService: UserService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    this.idE = id
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
          this.image = res.data?.img.filePath
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

  //download
  download() {
    let card = document.getElementById('card');
    html2canvas(card!).then(canvas => {
      let generatedImage = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let a = document.createElement('a');
      a.href = generatedImage;
      a.download = `test.png`;
      a.click();
      // at this point, image has been downloaded, then call the next download.
      // this._download(index + 1, array)
    });
  }

  //destacar
  destacar(){
    this.UserService.destacar(this.idE).subscribe({
      next: (res)=> {
        window.location.href = "/perfil/messages"
      }, error:(err)=> {
        console.log(err)
      }
    })
  }

  //visible
  visible(){
    this.UserService.visible(this.idE).subscribe({
      next: (res)=> {
        window.location.href = "/perfil/messages"
      }, error:(err)=> {
        console.log(err)
      }
    })
  }

  //eliminar
  eliminar(){
    this.UserService.eliminar(this.idE).subscribe({
      next: (res)=> {
        window.location.href = "/perfil/messages"
      }, error:(err)=> {
        console.log(err)
      }
    })
  }

}
