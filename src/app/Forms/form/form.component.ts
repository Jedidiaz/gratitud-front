import { Router, ActivatedRoute } from '@angular/router';
import { CreatorModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //variables form
  formName: FormGroup
  formTitle: FormGroup
  formDescription: FormGroup
  formEmail: FormGroup
  message: string = 'Hola, quiero conocerte ¿Cuál es tu nombre?'
  username: any

  infoCreator!: CreatorModel
  //variables, vistas
  nameView:boolean = true
  titleView:boolean = false
  messageView:boolean = false
  photoView:boolean = false
  emailView:boolean = false
  thanksView:boolean = false
  giftView:boolean = false
  payView: boolean = false

  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  constructor( private formBuilder: FormBuilder, private UserService: UserService, private router: Router, private _router: ActivatedRoute) {
    this.formName = formBuilder.group({
      name: ['', Validators.required]
    })
    this.formTitle = formBuilder.group({
      title: ['', Validators.required]
    })
    this.formDescription = formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(10)]]
    })
    this.formEmail = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      terminos: [false, [Validators.required]]
    })
  }

  ngOnInit(): void {
    const username = this._router.snapshot.paramMap.get('username')
    this.username = username
    this.getInfo(username)
  }

  onFileSelected(event: any){
    console.log(event)
  }

  getInfo(username: any){
    this.UserService.getInfoPage(username)
    .subscribe({
      next: (res)=> {
        this.infoCreator = res.user
      }, error: (err)=> {
        this.router.navigate(['/'])
      }
    })
  }

  //name, title, message, photo, email, thanks, gift
  //next
  nextTitle(){
    this.message = `¡Hola ${this.formName.value.name}! Escribe en menos de 6 palabras el título de tu mensaje`
    this.nameView = false
    this.titleView = true
  }
  nextMessage(){
    this.message = 'Ahora si, cuéntame que contribución he sido para ti, me hará muy feliz saberlo.'
    this.titleView = false
    this.messageView = true
  }
  nextPhoto(){
    this.message = 'Quiero saber como eres, sube una foto o tomate una selfie :) '
    this.messageView = false
    this.photoView = true
  }
  nextEmail(){
    this.message = 'Para verificar tu cuenta, escribe tu email.'
    this.photoView = false
    this.emailView = true
  }
  //Post del mensaje
  nextThanks(){
    const body = new FormData()
    body.append('name', this.formName.value.name)
    body.append('title', this.formName.value.title)
    body.append('description', this.formName.value.description)
    body.append('email', this.formName.value.email)
    body.append('img', this.formName.value.email)
    if (this.formEmail.value.terminos){
      this.UserService.getInfoPage(this.username)
    .subscribe({
      next: (res)=> {
        console.log(res)
      }, error: (err)=> {
        console.log(err)
      }
    })
    }
    // this.message = '¡ Gracias por tus palabras, espero verte pronto, bye !'
    // this.emailView = false
    // this.thanksView = true
  }
  nextGift(){
    this.thanksView = false
    this.giftView = true
  }
  nextPay(){
    this.giftView = false
    this.payView = true
  }
  //prev
  preName(){
    this.message = 'Hola, quiero conocerte ¿Cuál es tu nombre?'
    this.nameView = true
    this.titleView = false
  }

  preTitle(){
    this.message = `¡Hola ${this.formName.value.name}! Escribe en menos de 6 palabras el título de tu mensaje`
    this.titleView = true
    this.messageView = false
  }

  preMessage(){
    this.message = 'Ahora si, cuéntame que contribución he sido para ti, me hará muy feliz saberlo.'
    this.messageView = true
    this.photoView = false
  }

}
