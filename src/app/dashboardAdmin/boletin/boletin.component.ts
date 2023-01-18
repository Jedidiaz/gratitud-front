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
          console.log(res)
        }, error:(err)=> {
          console.log(err)
        }
      })
  }

}
