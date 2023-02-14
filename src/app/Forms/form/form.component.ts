import { Router, ActivatedRoute } from '@angular/router';
import { CreatorModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //variables form
  formName: FormGroup;
  formTitle: FormGroup;
  formDescription: FormGroup;
  formEmail: FormGroup;
  formGift: FormGroup;

  message: string = 'Hola, quiero conocerte ¿Cuál es tu nombre?';
  username: any;
  image: any;
  fileFill: boolean = false;
  price = ''

  infoCreator!: CreatorModel;
  //variables, vistas
  nameView: boolean = true;
  titleView: boolean = false;
  messageView: boolean = false;
  photoView: boolean = false;
  emailView: boolean = false;
  thanksView: boolean = false;
  giftView: boolean = false;
  payView: boolean = false;

  infoPay: any
  otroValor: any

  validEmail: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router,
    private _router: ActivatedRoute
  ) {
    this.formName = formBuilder.group({
      name: ['', Validators.required],
    });
    this.formTitle = formBuilder.group({
      title: ['', Validators.required],
    });

    this.formGift = formBuilder.group({
      donations: ['', Validators.required],
      otroValor: [''],
    });
    this.formDescription = formBuilder.group({
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(400),
          Validators.minLength(10),
        ],
      ],
    });
    this.formEmail = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      terminos: [false, [Validators.required]],
    });

  }

  ngOnInit(): void {
    const username = this._router.snapshot.paramMap.get('username');
    this.username = username;
    console.log(this.username)
    this.getInfo(username);
  }

  //get img
  onFileSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.fileFill = true
      this.image = {
        fileRaw: file,
        fileName: file.name,
      };
      console.log(this.image)
    }else{
      this.fileFill = false
    }
  }

  //get info creator
  getInfo(username: any) {
    this.UserService.getInfoPage(username).subscribe({
      next: (res) => {
        this.infoCreator = res.user;
      },
      error: (err) => {
        this.router.navigate(['/']);
      },
    });
  }

  //name, title, message, photo, email, thanks, gift
  //next
  nextTitle() {
    this.message = `¡Hola ${this.formName.value.name}! Escribe en menos de 6 palabras el título de tu mensaje`;
    this.nameView = false;
    this.titleView = true;
  }
  nextMessage() {
    this.message =
      'Ahora si, cuéntame que contribución he sido para ti, me hará muy feliz saberlo.';
    this.titleView = false;
    this.messageView = true;
  }
  nextPhoto() {
    this.message =
      'Quiero saber como eres, sube una foto o tomate una selfie :) ';
    this.messageView = false;
    this.photoView = true;
  }
  nextEmail() {
    this.message = 'Para verificar tu cuenta, escribe tu email.';
    this.photoView = false;
    this.emailView = true;
  }
  //Post del mensaje
  nextThanks() {
    const body = new FormData();
    body.append('name', this.formName.value.name);
    body.append('title', this.formTitle.value.title);
    body.append('description', this.formDescription.value.description);
    body.append('email', this.formEmail.value.email);
    body.append('img', this.image.fileRaw, this.image.fileName);
    body.append('username', this.username);
    if (this.formEmail.value.terminos) {
      this.UserService.postMessages(body).subscribe({
        next: (res) => {
          this.message = '¡ Gracias por tus palabras, espero verte pronto, bye !'
          this.emailView = false
          this.thanksView = true
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  nextGift() {
    this.thanksView = false;
    this.giftView = true;
  }
  nextPay() {
    console.log(this.formGift.value.otroValor)
      if (this.price != 'otro'){
        this.infoPay = {
          username: this.username,
          name: this.formName.value.name,
          email: this.formEmail.value.email,
          amount: this.price,
        }
      }else if (this.price === 'otro'){
        this.infoPay = {
          username: this.username,
          name: this.formName.value.name,
          email: this.formEmail.value.email,
          amount: this.formGift.value.otroValor,
        }
      }
      this.giftView = false;
      this.payView = true;
  }
  //prev
  preName() {
    this.message = 'Hola, quiero conocerte ¿Cuál es tu nombre?';
    this.nameView = true;
    this.titleView = false;
  }

  preTitle() {
    this.message = `¡Hola ${this.formName.value.name}! Escribe en menos de 6 palabras el título de tu mensaje`;
    this.titleView = true;
    this.messageView = false;
  }

  preMessage() {
    this.message =
      'Ahora si, cuéntame que contribución he sido para ti, me hará muy feliz saberlo.';
    this.messageView = true;
    this.photoView = false;
  }


  key($event: any){
    this.price =  $event.target.value
  }
}
