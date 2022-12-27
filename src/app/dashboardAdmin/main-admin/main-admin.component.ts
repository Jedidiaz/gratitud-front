import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {

  inicio: boolean = true
  creadores: boolean = false
  usuarios: boolean = false
  pros: boolean = false
  ajustes: boolean = false
  boletin: boolean = false
  configuracion: boolean = false
  home: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  inicioView(){
    this.inicio = true
    this.creadores = false
    this.usuarios = false
    this.pros = false
    this.ajustes = false
    this.boletin = false
    this.configuracion = false
    this.home = false
  }

  creadoresView(){
    this.inicio = false
    this.creadores = true
    this.usuarios = false
    this.pros = false
    this.ajustes = false
    this.boletin = false
    this.configuracion = false
    this.home = false
  }

  usuariosView(){
    this.inicio = false
    this.creadores = false
    this.usuarios = true
    this.pros = false
    this.ajustes = false
    this.boletin = false
    this.configuracion = false
    this.home = false
  }

  prosView(){
    this.inicio = false
    this.creadores = false
    this.usuarios = false
    this.pros = true
    this.ajustes = false
    this.boletin = false
    this.configuracion = false
    this.home = false
  }

  ajustesView(){
    this.inicio = false
    this.creadores = false
    this.usuarios = false
    this.pros = false
    this.ajustes = true
    this.boletin = false
    this.configuracion = false
    this.home = false
  }
}
