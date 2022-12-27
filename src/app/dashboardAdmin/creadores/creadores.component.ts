import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creadores',
  templateUrl: './creadores.component.html',
  styleUrls: ['./creadores.component.css']
})
export class CreadoresComponent implements OnInit {

  tablaCreadores: Array<any> = []
  constructor() { }

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
  }

}
