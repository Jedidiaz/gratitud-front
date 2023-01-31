import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PacksModel, imageProModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-list-gift',
  templateUrl: './list-gift.component.html',
  styleUrls: ['./list-gift.component.css']
})
export class ListGiftComponent implements OnInit {

  packs: PacksModel[] = []
  url = environment.api

  constructor(private UserService: UserService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    let queryR: any
    this._router.queryParams.subscribe({
      next: (ok) => {
        this.stripe(ok)
      }
    })
    if(Object.entries(query).length != 0){
      console.log('hola')
    }
    this.getPacks()
  }

  stripe(queryR: any){
    this.UserService.postDonationStripe(queryR)
      .subscribe(el => console.log(el))
  }

  download(file: imageProModel, name: string): void {
    this.UserService.getFile(name, file.filePath, file.fileType)
      .subscribe()
  }

  getPacks(){
    this.UserService.getPacks()
      .subscribe({
        next: (res)=> {
          this.packs = res.message
          this.packs.map((item, index) => {
            item.id = index + 1;
          });
        }, error: (err)=> {
          console.log(err)
        }
      })
  }

}
