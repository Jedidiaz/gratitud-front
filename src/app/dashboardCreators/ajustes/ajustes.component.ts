import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  formAjuste: FormGroup
  pro: boolean = true
  constructor( private formbuilder: FormBuilder) {
    this.formAjuste = formbuilder.group({
      passwordA: ['', Validators.required],
      passwordN: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  verifyView(){

  }

}
