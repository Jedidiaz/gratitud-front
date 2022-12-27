import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tablaSolicitud: Array<any> = []
  constructor() { }

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
  }

}
