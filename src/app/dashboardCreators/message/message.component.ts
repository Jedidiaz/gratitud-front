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
  like!: boolean
  color = '#b3b3b3'

  card: Array<any> = []
  constructor(private UserService: UserService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id')
    this.idE = id
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
          this.like = res.data?.like!
          console.log(res)
          if (res.data?.like) this.color = '#F36A6A'
          console.log(this.color)
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
    this.like = !this.like
    console.log(this.like)
    const body = {visible: this.like}
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
