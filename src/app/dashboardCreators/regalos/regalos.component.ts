import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regalos',
  templateUrl: './regalos.component.html',
  styleUrls: ['./regalos.component.css']
})
export class RegalosComponent implements OnInit {

  pro: boolean = false
  formRetiro: FormGroup
  constructor( private formbuilder: FormBuilder) {
    this.formRetiro = formbuilder.group({
      retiro: ['00.0', Validators.required],
      email: ['admin@gmail.com', Validators.required],
    })
  }
  ngOnInit(): void {
  }

}
