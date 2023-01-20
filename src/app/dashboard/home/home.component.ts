import { CreatorsAdminModel } from './../../models/users.interface';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel: Array<any> = [];
  users: Array<any> = [];
  card = {image: '../../../assets/danielacorrea.png', name: 'Daniela Correa', description: 'Facilitadora de Conciencia'};
  usersE: CreatorsAdminModel[] = []
  constructor( private UserService: UserService) { }

  ngOnInit(): void {
    this.carousel = ['../../../assets/carousel.png', '../../../assets/carousel.png', '../../../assets/carousel.png'];
    for(let i = 0; i < 8; i++){
      this.users.push(this.card)
    }
    this.getInfo()
  }

  getInfo(){
    this.UserService.getCreatorHome()
      .subscribe({
        next: (res)=> {
          console.log(res.data)
          this.usersE = res.data
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

  scrollLeft(){
    const left = document.querySelector(".scrollCarousel");
    left!.scrollBy(-200, 0);
  }

  scrollRight(){
    const left = document.querySelector(".scrollCarousel");
    left!.scrollBy(200, 0);
  }

}
