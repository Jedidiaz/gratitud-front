import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  value = 'hola';
  constructor( private formBuilder: FormBuilder) {
    this.formRegister = formBuilder.group({
      url: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
