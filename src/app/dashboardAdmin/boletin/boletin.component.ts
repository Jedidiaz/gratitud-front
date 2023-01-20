import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.css']
})
export class BoletinComponent implements OnInit {

  formBoletin: FormGroup
  message = {message: '', color: 'black'}
  constructor(private formbuilder: FormBuilder, private UserServices: UserService) {
    this.formBoletin = formbuilder.group({
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      url: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  sendBoletin(){
    const form = new FormData()
    form.append('asunto', this.formBoletin.value.asunto)
    form.append('texto', this.formBoletin.value.mensaje)
    form.append('URL', this.formBoletin.value.url)
    this.UserServices.boletinUpdate(form)
      .subscribe({
        next:(res)=> {
          if(res.response === 'Success'){
            this.message = {message: res.message!, color: 'green'}
            this.formBoletin.reset()
          }
          else this.message = {message: res.message!, color: 'red'}
        }, error:(err)=> {
          console.log(err)
        }
      })
  }

}
