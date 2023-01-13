import { UserService } from './../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-email',
  templateUrl: './auth-email.component.html',
  styleUrls: ['./auth-email.component.css']
})
export class AuthEmailComponent implements OnInit {

  queryParams: any;

  constructor(private _router: ActivatedRoute, private UserService: UserService) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe({
      next: (ok) => {
        this.queryParams = ok;
      }
    })
    console.log(this.queryParams)
    this.auth()
  }

  auth(){
    this.UserService.authGet(this.queryParams.token)
      .subscribe({
        next: (res)=> {
          console.log(res)
        },error: (err)=> {
          console.log(err)
        }
      })
  }

}
