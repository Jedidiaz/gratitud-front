import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  debounceTime,
  distinct,
  fromEvent,
  map,
  Subscription,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('urlUp', { static: true }) urlUp!: ElementRef;
  formRegister: FormGroup;
  value = 'hola';

  verifyIcon: boolean = false;
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {
    this.formRegister = formBuilder.group({
      url: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    fromEvent<Event>(this.urlUp.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          const evento = (event.target as HTMLInputElement).value;
          return evento;
        }),
        debounceTime(700),
      )
      .subscribe((data: string) => {
        if (data != ''){
          this.verify(data)
        }else{
          this.verifyIcon = false
          this.message = 'Campo vacio'
        }
      });
  }

  verify(data: string) {
    const form: any = new FormData();
    form.append('username', data.toLowerCase());
    console.log(form);
    if (this.formRegister.valid) {
      this.UserService.verifyURL(form).subscribe({
        next: (el) => {
          console.log(el);
          if (el.response === 'Success') {
            this.verifyIcon = true;
            this.message = el.message!;
          } else {
            this.verifyIcon = false;
            this.message = el.message!;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  signUp() {
    if (this.formRegister.valid && this.verifyIcon)
      this.router.navigate([
        `/registro/${this.formRegister.value.url.toLowerCase()}`,
      ]);
  }
}
