import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { CreatorsAdminModel } from 'src/app/models/users.interface';

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.css']
})
export class ProsComponent implements OnInit {

  tablaCreadoresPro: Array<any> = []
  creatorsPro: CreatorsAdminModel[] = []
  historial: boolean = false
  email = ''

  filterSearch = ''
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    for (let i = 10; i > 0; i--){
      this.tablaCreadoresPro.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        date: '21/05/2022',
        pro: 100.00,
      })
    }

    this.getCreatorsPro()
  }

  Historial(email:any){
    this.historial = true
    this.email = email
  }

  ReciveEvebt($event: any){
    this.historial = $event
    console.log(this.historial)
  }

  //get pros
  getCreatorsPro(){
    this.userService.getcreatorsPro()
      .subscribe({
        next: (res)=> {
          this.creatorsPro = res.data;
          this.creatorsPro.map((item, index) => {
          item.id = index + 1;
        });
        this.creatorsPro = this.creatorsPro.reverse();
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
