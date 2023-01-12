import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  tablaUsuarios: Array<any> = []
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    for (let i = 10; i > 0; i--){
      this.tablaUsuarios.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        date: '21/05/2022',
        pro: 'HACER PRO',
      })
    }
  }

  //delete
  deleteuser(email:string){
    this.UserService.deleteUser(email).subscribe({
      next: (el)=> {
        console.log(el)
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  //get
  getCreators(){
    this.UserService.getcreators().subscribe({
      next: (el)=>{
        console.log(el)
      },error: (err)=> {
        console.log(err)
      }
    })
  }

}
