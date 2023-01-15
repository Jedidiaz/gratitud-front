import { CreatorsAdminModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creadores',
  templateUrl: './creadores.component.html',
  styleUrls: ['./creadores.component.css'],
})
export class CreadoresComponent implements OnInit {
  creators: CreatorsAdminModel[] = [];
  number: Array<any> = [];
  tablaCreadores: Array<any> = [];

  dataSource: any
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    for (let i = 10; i > 0; i--) {
      this.tablaCreadores.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        date: '21/05/2022',
        pro: 'HACER PRO',
      });
    }
    this.getCreators();
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase
  }

//get creators
  getCreators() {
    this.userService.getcreators().subscribe({
      next: (res) => {
        console.log(res)
        this.creators = res.data;
        this.creators.map((item, index) => {
          item.id = index + 1;
          item.createdAt = item.createdAt.substring(0, 10);
        });
        this.creators = this.creators.reverse();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
