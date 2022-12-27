import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajustes-admin',
  templateUrl: './ajustes-admin.component.html',
  styleUrls: ['./ajustes-admin.component.css']
})
export class AjustesAdminComponent implements OnInit {

  formAjustes: FormGroup;
  formPassword: FormGroup

  Verify = false
  constructor( private formBuilder: FormBuilder) {
    this.formAjustes = formBuilder.group({
      año: [99.00, Validators.required],
      mes: [10.00, Validators.required],
    })

    this.formPassword = formBuilder.group({
      passwordA: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }


}
