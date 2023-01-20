import { PacksModel, imageProModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-gift',
  templateUrl: './list-gift.component.html',
  styleUrls: ['./list-gift.component.css']
})
export class ListGiftComponent implements OnInit {

  packs: PacksModel[] = []

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getPacks()
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
