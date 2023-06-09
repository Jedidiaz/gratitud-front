import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  //salir
  salir(){
    localStorage.removeItem('token')
    window.location.href="/login"
  }

  goHome(){
    this.inicio = false
    this.creadores = false
    this.usuarios = false
    this.pros = false
    this.ajustes = false
    this.boletin = false
    this.configuracion = false
    this.home = true
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

  boletinView(){
    this.inicio = false
    this.creadores = false
    this.usuarios = false
    this.pros = false
    this.ajustes = false
    this.boletin = true
    this.configuracion = false
    this.home = false
  }

  configuracionView(){
    this.inicio = false
    this.creadores = false
    this.usuarios = false
    this.pros = false
    this.ajustes = false
    this.boletin = false
    this.configuracion = true
    this.home = false
  }
}
