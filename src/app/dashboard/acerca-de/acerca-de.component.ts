import { infoPageModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acerca!: string;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.UserService.getGratitudInfo()
      .subscribe({
        next: (res)=> {
          this.acerca = res.datainfo[0].acerca
          console.log(res)
        }, error: (err)=> {
          console.log(err)
        }
      })
  }
}
