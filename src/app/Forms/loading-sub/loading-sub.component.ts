import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-sub',
  templateUrl: './loading-sub.component.html',
  styleUrls: ['./loading-sub.component.css']
})
export class LoadingSubComponent implements OnInit {

  constructor(private _router: ActivatedRoute, private UserService: UserService){}

  ngOnInit(): void {
    this._router.queryParams.subscribe({
      next: (res)=> {
        this.stripe(res)
      }, error:(err)=> {
        console.log(err)
      }
    })
  }

  stripe(queryR: any){
    this.UserService.postSubStripe(queryR)
      .subscribe(res => {
        if (!res.cancel){
          window.location.href = "/perfil"
        }
      })
  }
}
