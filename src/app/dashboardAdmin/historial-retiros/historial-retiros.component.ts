import { withdrawAdminModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-historial-retiros',
  templateUrl: './historial-retiros.component.html',
  styleUrls: ['./historial-retiros.component.css'],
})
export class HistorialRetirosComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<boolean>();
  @Input() email!: string;
  tablaHistorial: Array<any> = [];
  back: boolean = false;

  pro: withdrawAdminModel[] = [];
  name = '';
  statusPay: boolean = false;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    for (let i = 10; i > 0; i--) {
      this.tablaHistorial.push({
        id: i,
        name: 'Daniela Correa',
        email: 'danielacorrea@gmail.com',
        ingresos: 'Ingresos',
        pro: 100.0,
        pago: 'Pagar',
      });
    }
    this.getPro();
  }

  sendBoolean() {
    this.messageEvent.emit((this.back = false));
  }

  //get pro
  getPro() {
    this.UserService.getProByEmail(this.email).subscribe({
      next: (res) => {
        console.log(res);
        this.name = res.data1![0].name;
        this.pro = res.data1!;
        this.pro.map((item, index) => {
          item.id = index + 1;
          if (item.statusTransaction === 'Complete') item.statusPay = true;
          else item.statusPay = false;
          item.createdAt = item.createdAt.substring(0, 10);
        });
        this.pro = this.pro.reverse();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
