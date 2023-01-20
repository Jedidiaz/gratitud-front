import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.css'],
})
export class EditBioComponent implements OnInit {
  image: any;
  newImg: any;
  disable: boolean = true

  formEdit: FormGroup;
  formRedes: FormGroup;
  messageEdit = { message: '', color: 'black' }
  messageRed = { message: '', color: 'black' }
  constructor(
    private formbuilder: FormBuilder,
    private UserService: UserService,
    private sanitizer: DomSanitizer
  ) {
    this.formEdit = formbuilder.group({
      url: ['', Validators.required],
      name: ['', Validators.required],
      profesion: ['', Validators.required],
      titulo: ['', Validators.required],
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(400),
          Validators.minLength(10),
        ],
      ],
    });
    this.formRedes = formbuilder.group({
      facebook: ['', Validators.required],
      instagram: ['', Validators.required],
      tiktok: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCreator();
  }

  //get img
  onFileSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.disable = false
      this.newImg = {
        fileRaw: file,
        fileName: file.name,
      };
      this.extraerBase64(file).then((image) => {
        this.image = image;
      });
      console.log(this.newImg);
    } else {
      this.disable = false
    }
  }

  //extraer base64
  extraerBase64 = async ($event: any) =>
    new Promise((resolve: any) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustHtml(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          resolve(null);
        };
        return;
      } catch (e) {
        return null;
      }
    });

  getCreator() {
    this.UserService.getInfo().subscribe({
      next: (el) => {
        this.formEdit.setValue({
          url: el.user.username,
          name: el.user.name,
          profesion: el.user.profesion,
          titulo: el.user.titulo,
          description: el.user.description,
        });
        this.formRedes.setValue({
          facebook: el.user.facebook,
          instagram: el.user.instagram,
          tiktok: el.user.tiktok,
        });
        this.image = el.user.imgpro.filePath;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //update Img
  updateImageProfile(){
    const form = new FormData()
    form.append('imgpro', this.newImg.fileRaw, this.newImg.fileName)
    this.UserService.updateImg(form)
    .subscribe({
      next: (res)=> {
        window.location.reload()
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  updateInfo() {
    if (this.formEdit.valid) {
      const form = new FormData();
      form.append('description', this.formEdit.value.description);
      form.append('titulo', this.formEdit.value.titulo);
      form.append('name', this.formEdit.value.name);
      form.append('profesion', this.formEdit.value.profesion);
      form.append('username', this.formEdit.value.url.toLowerCase());
      this.UserService.editBio(form).subscribe({
        next: (res) => {
          if(res.response === 'Success'){
            this.messageEdit = {message: res.message!, color: 'green'}
          }
          else this.messageEdit = {message: res.message!, color: 'red'}
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  updateRedes() {
    const form = new FormData();
    form.append('facebook', this.formRedes.value.facebook);
    form.append('instagram', this.formRedes.value.instagram);
    form.append('tiktok', this.formRedes.value.tiktok);
    this.UserService.editRedes(form).subscribe({
      next: (res) => {
        if(res.response === 'Success'){
          this.messageRed = {message: res.message!, color: 'green'}
        }
        else this.messageRed = {message: res.message!, color: 'red'}
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
