import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.css']
})
export class EditBioComponent implements OnInit {

  formEdit: FormGroup
  formRedes: FormGroup
  constructor( private formbuilder: FormBuilder ) {
    this.formEdit = formbuilder.group({
      url: ['', Validators.required],
      name: ['', Validators.required],
      profesion: ['', Validators.required],
      titulo: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.formRedes = formbuilder.group({
      facebook: ['', Validators.required],
      instagram: ['', Validators.required],
      tiktok: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
