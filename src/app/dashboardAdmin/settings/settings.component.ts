import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  formSettings: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.formSettings = formbuilder.group({
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      url: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

}
