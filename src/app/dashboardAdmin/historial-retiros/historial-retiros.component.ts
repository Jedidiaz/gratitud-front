import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-historial-retiros',
  templateUrl: './historial-retiros.component.html',
  styleUrls: ['./historial-retiros.component.css']
})
export class HistorialRetirosComponent implements OnInit {

  @Output() historial = new EventEmitter<boolean>()
  tablaHistorial: Array<any> = []
  back: boolean = false
  constructor() { }

  ngOnInit(): void {
    for (let i = 10; i > 0; i--){
      this.tablaHistorial.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        ingresos: 'Ingresos',
        pro: 100.00,
        pago: 'Pagar'
      })
    }
  }

  Historial(){
    this.historial.emit(this.back)
  }

}
