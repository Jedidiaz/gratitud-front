import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-suscription',
  templateUrl: './suscription.component.html',
  styleUrls: ['./suscription.component.css']
})
export class SuscriptionComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  title = 'angular-paypal-payment';
  constructor() { }

  ngOnInit(): void {
    const buttompaypal = document.getElementById('paypal-P-1WH52851E6413843NMPE5G3Q')
    const infoPay = {
      amount: '10',
      email: '10',
      name: '10',
      username: '10',
      plan: 'P-1WH52851E6413843NMPE5G3Q'
    }
    paypal
    .Buttons({
      style: {
        color: 'gold',
        layout: 'horizontal',
        label: 'paypal',
      },
      createSubscription: function (data: any, actions: any) {
        return actions.subscription.create({
          'plan_id': infoPay.plan,
        });
      },
      onApprove: function(data: any, actions: any) {
        alert(data.subscriptionID);
        return fetch('http://25.78.142.190:9000/api/susorders', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            plan_id: infoPay.plan,
            username: 'sheylahawkins',
            subscriptionID: data.subscriptionID,
          }),
        })
          .then((response)=> response.json())
          .then((subscriptionID)=> {
            console.log(subscriptionID)
          })
      }
    })
    .render(this.paypalElement.nativeElement);

  }


  back() {
    document.getElementById('overlay')!.style.display = 'none';
  }

  paypalPay() {
    document.getElementById('overlay')!.style.display = 'flex';
  }

}
