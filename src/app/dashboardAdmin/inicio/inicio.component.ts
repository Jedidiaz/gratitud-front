import { withdrawAdminModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  infoPanel = {creators: 0, pros: 0, users: 0}
  request: withdrawAdminModel[] = []

  tablaSolicitud: Array<any> = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    for (let i = 10; i > 0; i--){
      this.tablaSolicitud.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        date: '21/05/2022',
        dispo: 100.00,
      })
    }
    this.getCreators()
    this.requestWithdraw()
    this.getUsers()
  }

  getCreators() {
    this.userService.getcreators().subscribe({
      next: (res) => {
        this.infoPanel = {creators: res.data.length,
          pros: res.data.filter(el => el.isPro == true).length,
          users: 0
        }
      },
      error: (err) => {
        console.log(err)
      },
    });
  }

  requestWithdraw(){
    this.userService.getRequestWithdraw()
      .subscribe({
        next: (res)=> {
          this.request = res.data1!;
          this.request.map((item, index) => {
          item.id = index + 1;
          item.createdAt = item.createdAt.substring(0, 10);
          });
        this.request = this.request.reverse();
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

  //users

  getUsers(){
    this.userService.getUsers()
      .subscribe({
        next: (res)=> {
          this.infoPanel.users = res.message.length
        }, error: (err)=> {
          console.log(err)
        }
      })
  }
}
