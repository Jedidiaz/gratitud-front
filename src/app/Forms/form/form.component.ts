import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formName: FormGroup
  constructor( private formBuilder: FormBuilder) { 
    this.formName = formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
