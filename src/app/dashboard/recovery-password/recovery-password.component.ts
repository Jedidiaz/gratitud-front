import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {
  formReset: FormGroup;
  constructor( private formBuilder: FormBuilder) {
    this.formReset = formBuilder.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
