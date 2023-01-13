import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creadores',
  templateUrl: './creadores.component.html',
  styleUrls: ['./creadores.component.css']
})
export class CreadoresComponent implements OnInit {

  tablaCreadores: Array<any> = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    for (let i = 10; i > 0; i--){
      this.tablaCreadores.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        date: '21/05/2022',
        pro: 'HACER PRO',
      })
    }
    this.getCreators()
  }

  getCreators(){
    this.userService.getcreators().subscribe({
      next: (el)=>{
        console.log(el)
      },error: (err)=> {
        console.log(err)
      }
    })
  }

}
