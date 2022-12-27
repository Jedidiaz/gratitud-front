import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  tablaUsuarios: Array<any> = []
  constructor() { }

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

}
