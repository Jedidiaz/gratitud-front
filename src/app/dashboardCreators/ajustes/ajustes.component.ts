import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  email!: string
  formAjuste: FormGroup
  pro: boolean = true
  constructor( private formbuilder: FormBuilder, private UserService: UserService) {
    this.formAjuste = formbuilder.group({
      passwordA: ['', Validators.required],
      passwordN: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getCreator()
  }

  verifyView(){
  }

  getCreator(){
    this.UserService.getInfo().subscribe({
      next: (res)=>{
        this.email = res.user.email
      },error: (err)=> {
        console.log(err)
      }
    })
  }

}
