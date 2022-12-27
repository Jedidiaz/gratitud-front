import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.css']
})
export class ProsComponent implements OnInit {

  tablaCreadoresPro: Array<any> = []
  historial: boolean = false
  constructor() { }

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
  }

  Historial(){
    this.historial = true
  }

}
