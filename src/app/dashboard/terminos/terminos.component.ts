import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit {
  acerca!: string;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.UserService.getGratitudInfo()
      .subscribe({
        next: (res)=> {
          this.acerca = res.datainfo[0].reglas
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
