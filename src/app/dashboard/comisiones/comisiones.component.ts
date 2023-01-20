import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent implements OnInit {
  comision!: string;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.UserService.getGratitudInfo()
      .subscribe({
        next: (res)=> {
          this.comision = res.datainfo[0].comision
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
