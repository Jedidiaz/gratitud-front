import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loged: boolean = false
  constructor() { }

  ngOnInit(): void {
    if( localStorage.getItem('token') ){
      this.loged = true;
    }
  }

  logOut(){
    localStorage.removeItem('token')
    window.location.reload()
  }

}
