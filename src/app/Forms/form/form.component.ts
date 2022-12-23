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


  //variables, vistas
  nameView:boolean = true
  titleView:boolean = false
  messageView:boolean = false
  photoView:boolean = false
  emailView:boolean = false
  thanksView:boolean = false
  giftView:boolean = false
  payView: boolean = false

  constructor( private formBuilder: FormBuilder) {
    this.formName = formBuilder.group({
      name: ['', Validators.required]
    })
    this.formTitle = formBuilder.group({
      title: ['', Validators.required]
    })
    this.formDescription = formBuilder.group({
      description: ['', Validators.required]
    })
    this.formEmail = formBuilder.group({
      email: ['', Validators.required],
      terminos: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    console.log(event)
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
  nextThanks(){
    this.message = '¡ Gracias por tus palabras, espero verte pronto, bye !'
    this.emailView = false
    this.thanksView = true
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
