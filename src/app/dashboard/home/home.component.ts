import { DataModelInterface, responseGetInfoHomeModel, dataInfoHomeModel } from './../../models/homeModel.interface';
import { CreatorsAdminModel } from './../../models/users.interface';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousel: Array<any> = [];
  users: Array<any> = [];
  card = {
    image: '../../../assets/danielacorrea.png',
    name: 'Daniela Correa',
    description: 'Facilitadora de Conciencia',
  };
  usersE: DataModelInterface[] = [];
  infoHome!: dataInfoHomeModel
  constructor(
    private UserService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carousel = [
      '../../../assets/carousel.png',
      '../../../assets/carousel.png',
      '../../../assets/carousel.png',
    ];
    for (let i = 0; i < 8; i++) {
      this.users.push(this.card);
    }
    this.getInfo();
    this.getinfoHome()
  }

  getInfo() {
    this.UserService.getCreatorHome().subscribe({
      next: (res) => {
        console.log(res);
        this.usersE = res.data;
        this.usersE.map((item, index)=> {
          item.num = res.datam[index]
        })
        console.log(this.usersE)
      },
      error: (err) => {
        if (err.status === 0) {
          this.snackBar.open('Se perdió la conexión', 'ok', {
            duration: 3000,
          });
        }
      },
    });
  }

  getinfoHome(){
    this.UserService.getInfoHome().subscribe({
      next: (res)=> {
        console.log(res)
        if(res.response === 'Success')this.infoHome = res.data
      }
    })
  }

  scrollLeft() {
    const left = document.querySelector('.scrollCarousel');
    left!.scrollBy(-200, 0);
  }

  scrollRight() {
    const left = document.querySelector('.scrollCarousel');
    left!.scrollBy(200, 0);
  }

  redirect(username:any){
    window.location.href = '/'+ username
  }
}
