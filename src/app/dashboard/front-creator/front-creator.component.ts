import { Component, OnInit } from '@angular/core';

import { NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-front-creator',
  templateUrl: './front-creator.component.html',
  styleUrls: ['./front-creator.component.css']
})
export class FrontCreatorComponent implements OnInit {


  cards: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++){
      this.cards.push({
        name: 'Daniela Correa',
        clase: 'Una clase super maravillosa!',
        image: '../../../assets/danielacorrea.png',
        description: '"Ame los procesos, me encantaron, los llevo a todos lados, no solo me sirvieron para sanar mi alma, sino para despedir muchos bloqueos que me estaban destruyendo."',
        nameFollow: 'John Doe',
        rating: 3
      })
    }
  }

}
