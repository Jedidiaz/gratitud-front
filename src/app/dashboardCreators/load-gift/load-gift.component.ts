import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-gift',
  templateUrl: './load-gift.component.html',
  styleUrls: ['./load-gift.component.css'],
})
export class LoadGiftComponent implements OnInit {
  formGift: FormGroup;
  image: any;
  pro: boolean = false;
  fileFill: boolean = false;

  message = { message: '', color: 'black' };

  constructor(
    private formbuilder: FormBuilder,
    private UserService: UserService
  ) {
    this.formGift = formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.getCreator();
  }

  //get image
  getImg($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.fileFill = true;
      console.log(file);
      this.image = {
        fileRaw: file,
        fileName: file.name,
      };
    } else this.fileFill = false;
  }

  //upload
  uploadPack() {
    if (this.formGift.valid && this.image != undefined) {
      const body = new FormData();
      body.append('name', this.formGift.value.name);
      body.append('title', this.formGift.value.title);
      body.append('file', this.image.fileRaw, this.image.fileName);
      this.UserService.uploadPack(body).subscribe({
        next: (res) => {
          if (res.response === 'Success') {
            this.message = { message: res.message!, color: 'green' };
            this.formGift.reset();
            this.image = undefined;
          } else this.message = { message: res.message!, color: 'red' };
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else this.message = { message: 'Falta adjuntar archivo', color: 'red' };
  }

  //get creator
  getCreator() {
    this.UserService.getInfo().subscribe({
      next: (res) => {
        this.pro = res.user.isPro;
        this.formGift.setValue({
          title: '',
          name: res.user.name,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
