import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
})
export class CancelarComponent implements OnInit {
  cancelado: boolean = false;
  constructor( private UserService: UserService ) {}

  ngOnInit(): void {}

  cancelar() {
    this.UserService.cancelarSub().subscribe({
      next: (res) => {
        this.cancelado = true
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  back(){
    window.location.href = "/perfil"
  }
}
