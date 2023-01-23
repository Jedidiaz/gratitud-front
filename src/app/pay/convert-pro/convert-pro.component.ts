import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-pro',
  templateUrl: './convert-pro.component.html',
  styleUrls: ['./convert-pro.component.css']
})
export class ConvertProComponent implements OnInit {
  formPay: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.formPay = this.formbuilder.group({
      proM: [null, Validators.required]
    })
   }

  ngOnInit(): void {
  }

}
