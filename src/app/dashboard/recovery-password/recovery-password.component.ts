import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
})
export class RecoveryPasswordComponent implements OnInit {
  formReset: FormGroup;
  message = { message: '', color: '#fff' };
  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formReset = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    const form = new FormData();
    form.append('email', this.formReset.value.email)

    this.userService.sendEmailPassword(form).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.message.message = res.message!;
          this.message.color = 'green';
          window.location.href = '/';
        } else {
          this.message.message = res.message!;
          this.message.color = 'red';
        }
      },
      error: (err) => {},
    });
  }
}
