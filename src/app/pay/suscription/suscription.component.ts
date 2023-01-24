import { environment } from './../../../environments/environment';
import { CreatorModel } from './../../models/users.interface';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-suscription',
  templateUrl: './suscription.component.html',
  styleUrls: ['./suscription.component.css']
})
export class SuscriptionComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  @Input() selected: any
  @Input() username: any

  title = 'angular-paypal-payment';
  //url
  url = environment.api
  planID = ''
  paypalMes = environment.subscription_paypalMes
  paypalAño = environment.subscription_paypalAño
  stripeMes = environment.subscription_stripeMes
  stripeAño = environment.subscription_stripeAño
  metoh: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const url = this.url
    let planIDPaypal: any
    if(this.selected === '10'){
      planIDPaypal = this.paypalMes
    }else {
      planIDPaypal = this.paypalAño
    }
    const infoPay = {
      amount: this.selected,
      username: this.username,
    }
    const paypalRender = this.paypalElement.nativeElement
    function loadAsync(url: any, callback: any) {
      var s = document.createElement('script');
      s.setAttribute('src', url); s.onload = callback;
      document.head.insertBefore(s, document.head.firstElementChild);
    }

    loadAsync('https://www.paypal.com/sdk/js?client-id=AW44U8epcESMROONuZgFbEn-FCnFlQINGIl-s4iPNVIdc-7-FNipAesAgTCAkXVn5CgvGavuNSi3PIWn&vault=true&intent=subscription', function(){
      paypal
      .Buttons({
        style: {
          color: 'gold',
          layout: 'horizontal',
          label: 'paypal',
        },
        createSubscription: function (data: any, actions: any) {
          return actions.subscription.create({
            'plan_id': planIDPaypal,
          });
        },
        onApprove: function(data: any, actions: any) {
          console.log(data.subscriptionID);
          return fetch(`${url}susorders`, {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              plan_id: planIDPaypal,
              username: infoPay.username,
              subscriptionID: data.subscriptionID,
            }),
          })
            .then((response)=> response.json())
            .then((subscriptionID)=> {
              console.log(subscriptionID)
            })
        }
      })
      .render(paypalRender);
    })

  }

  //metodo capture
  metodo($event: any){
    this.metoh = $event.target.value
  }

  back() {
    document.getElementById('overlay')!.style.display = 'none';
  }

  select() {
    if (this.metoh === 'paypal'){
      document.getElementById('overlay')!.style.display = 'flex';
    }else{
      document.getElementById('checkout-button')!.click();
    }
  }

  //stripe
  stripe(){
    let planID = ''
    if(this.selected === '10'){
      planID = this.stripeMes
    }else {
      planID = this.stripeAño
    }
    console.log(planID)
    fetch (`${this.url}subStripe`, {
      method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      plan_id: planID,
      username: this.username,
    })
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
  }


}
