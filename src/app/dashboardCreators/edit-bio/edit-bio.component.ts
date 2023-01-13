import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.css']
})
export class EditBioComponent implements OnInit {
  messageError = ''
  image = ''

  formEdit: FormGroup
  formRedes: FormGroup
  constructor( private formbuilder: FormBuilder, private UserService: UserService ) {
    this.formEdit = formbuilder.group({
      url: ['', Validators.required],
      name: ['', Validators.required],
      profesion: ['', Validators.required],
      titulo: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]]
    })
    this.formRedes = formbuilder.group({
      facebook: ['', Validators.required],
      instagram: ['', Validators.required],
      tiktok: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getCreator()
  }

  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (el)=>{
        this.formEdit.setValue({
          'url': el.user.username,
          'name': el.user.name,
          'profesion': el.user.profesion,
          'titulo': el.user.titulo,
          'description': el.user.description,
        })
        this.formRedes.setValue({
          'facebook': el.user.facebook,
          'instagram': el.user.instagram,
          'tiktok': el.user.tiktok,
        })
        this.image = el.user.imgpro.fileName
      },error: (err)=> {
        console.log(err)
      }
    })
  }

  updateInfo(){
    if(this.formEdit.valid){
      const form = new FormData()
      form.append('description', this.formEdit.value.description)
      form.append('titulo', this.formEdit.value.titulo)
      form.append('name', this.formEdit.value.name)
      form.append('profesion', this.formEdit.value.profesion)
      form.append('username', this.formEdit.value.url.toLowerCase())
      this.UserService.editRedes(form).subscribe({
        next: ()=> {
          this.messageError = '*Cambios guardados*'
        },error: (err)=> {
          if(err.status === 501)this.messageError = '*Se requieren todos los campos*'
        }
      })
    }
  }

  updateRedes(){
      const form = new FormData()
      form.append('facebook', this.formRedes.value.facebook)
      form.append('instagram', this.formRedes.value.instagram)
      form.append('tiktok', this.formRedes.value.tiktok)
      this.UserService.editRedes(form).subscribe({
        next: (el)=> {
          console.log(el)
        },error: (err)=> {
          if(err.status === 500)this.messageError = '*Este correo ya esta en uso*'
          else if(err.status === 400)this.messageError = '*esta direccion ya está en uso*'
          console.log(err)
        }
      })
  }

}
