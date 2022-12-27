import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatores',
  templateUrl: './creatores.component.html',
  styleUrls: ['./creatores.component.css']
})
export class CreatoresComponent implements OnInit {

  pro: boolean = true
  constructor() {
  }

  ngOnInit(): void {
  }

  copyToClipboard(): void {
  }

}
