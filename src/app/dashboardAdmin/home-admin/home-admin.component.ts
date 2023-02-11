import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  
  formBoletin: FormGroup
  formImg: FormGroup
  message = {message: '', color: 'black'}
  messageimg = {message: '', color: 'black'}
  fileFill: boolean = false;
  image: any
  constructor(private formbuilder: FormBuilder, private UserServices: UserService) {
    this.formBoletin = formbuilder.group({
      tituloh1: ['', Validators.required],
      texto1: ['', Validators.required],
      subtituloh2: ['', Validators.required],
      texto2: ['', Validators.required],
      subtituloh3: ['', Validators.required],
      texto3: ['', Validators.required],
    })
    this.formImg = formbuilder.group({
      img: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.getinfo()
  }

  sendBoletin(){
    const form = new FormData()
    form.append('tituloh1', this.formBoletin.value.tituloh1)
    form.append('texto1', this.formBoletin.value.texto1)
    form.append('subtituloh2', this.formBoletin.value.subtituloh2)
    form.append('texto2', this.formBoletin.value.texto2)
    form.append('subtituloh3', this.formBoletin.value.subtituloh3)
    form.append('texto3', this.formBoletin.value.texto3)
    this.UserServices.infoHome(form)
      .subscribe({
        next:(res)=> {
          if(res.response === 'Success'){
            this.message = {message: res.message!, color: 'green'}
          }
          else this.message = {message: res.message!, color: 'red'}
        }, error:(err)=> {
          console.log(err)
        }
      })
  }
  //img

   //get img
   onFileSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.fileFill = true
      this.image = {
        fileRaw: file,
        fileName: file.name,
      };
    }else{
      this.fileFill = false
    }
  }

  sendimg(){
    const form = new FormData()
    form.append('image', this.image.fileRaw, this.image.fileName)
    this.UserServices.infoHomePhoto(form)
      .subscribe({
        next:(res)=> {
          if(res.response === 'Success'){
            this.messageimg = {message: res.message!, color: 'green'}
          }
          else this.messageimg = {message: res.message!, color: 'red'}
        }, error:(err)=> {
          console.log(err)
        }
      })
  }

  //get info
  getinfo(){
    this.UserServices.getInfoHome().subscribe({
      next: (res)=> {
        this.formBoletin.setValue({
          tituloh1: res.data.tituloh1,
          texto1: res.data.texto1,
          subtituloh2: res.data.subtituloh2,
          texto2: res.data.texto2,
          subtituloh3: res.data.subtituloh3,
          texto3: res.data.texto3,
        })
      }, error: (err)=> {console.log(err)}
    })
  }
}
