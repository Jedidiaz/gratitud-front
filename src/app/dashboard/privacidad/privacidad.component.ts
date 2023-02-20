import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css']
})
export class PrivacidadComponent implements OnInit {

  acerca!: string;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.UserService.getGratitudInfo()
      .subscribe({
        next: (res)=> {
          this.acerca = res.datainfo[0].aviso
          console.log(res)
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
