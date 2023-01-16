import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.css']
})
export class BoletinComponent implements OnInit {

  formBoletin: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.formBoletin = formbuilder.group({
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      url: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

}
