import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  card: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    this.card.push({
      name: 'Daniela Correa',
      clase: 'Una clase super maravillosa!',
      image: '../../../assets/danielacorrea.png',
      description: '"Ame los procesos, me encantaron, los llevo a todos lados, no solo me sirvieron para sanar mi alma, sino para despedir muchos bloqueos que me estaban destruyendo."',
      nameFollow: 'John Doe',
      rating: 3,
      select: false,
      like: false
    })
  }

}
