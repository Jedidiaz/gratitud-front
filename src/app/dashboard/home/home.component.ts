import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel: Array<any> = [];
  users: Array<any> = [];
  card = {image: '../../../assets/danielacorrea.png', name: 'Daniela Correa', description: 'Facilitadora de Conciencia'};
  constructor() { }

  ngOnInit(): void {
    this.carousel = ['../../../assets/carousel.png', '../../../assets/carousel.png', '../../../assets/carousel.png'];
    for(let i = 0; i < 8; i++){
      this.users.push(this.card)
    }
  }

}
