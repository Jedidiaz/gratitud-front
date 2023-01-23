import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaypalService } from './../../services/paypal/paypal.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

declare var paypal: any;

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.css'],
})
export class PayMethodComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  @Input() infoPay: any

  //var metodo
  capMetodo: any

  title = 'angular-paypal-payment';
  url = environment.api;
  datos = {};
  res: any

  body: any

  planID: any

  formPayM: FormGroup
  metoh: any
  constructor( private formbuilder: FormBuilder) {
    this.formPayM = formbuilder.group({
      payM: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    const url = this.url
    const infoPay = this.infoPay
    if(infoPay.amount === '5.00'){
      this.planID = 'price_1MQEomDqSAlgA2D1jS3a40OU'
    }else if(infoPay.amount === '10.00'){
      this.planID = 'price_1MQEdrDqSAlgA2D1ElK2gPmB'
    }else if(infoPay.amount === '20.00'){
      this.planID = 'price_1MQEiIDqSAlgA2D1H3Gz0Y8A'
    }

    paypal
      .Buttons({
        style: {
          shape: 'pill',
          color: 'gold',
          layout: 'horizontal',
          label: 'paypal',
        },
        createOrder: function (data: any, actions: any) {
          return fetch(`http://25.78.142.190:9000/api/orders`, {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              amount: infoPay.amount,
            }),
          })
            .then((response) => response.json())
            .then((order) => order.id);
        },
        onApprove: function (data: any, actions: any) {
          return fetch(
            `http://25.78.142.190:9000/api/orders/${data.orderID}/capture`,
            {
              method: 'post',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                email: infoPay.email,
                username: infoPay.username,
                name: infoPay.name,
                amount: infoPay.amount,
              }),
            }
          )
            .then((response) => response.json())
            .then((orderData) => {
              console.log(
                'Capture result',
                orderData,
                JSON.stringify(orderData, null, 2)
              );
              var transaction =
                orderData.purchase_units[0].payments.captures[0];
              if(transaction.status === 'COMPLETED'){
                window.location.href="/lista-regalos"
              }
            });
        },
      })
      .render(this.paypalElement.nativeElement);
  }

  back() {
    document.getElementById('overlay')!.style.display = 'none';
  }


  //selection pay metoh
  select() {
    if (this.metoh === 'paypal'){
      document.getElementById('overlay')!.style.display = 'flex';
    }else{
      let stripe =document.getElementById('checkout-button')!.click();
    }
  }


  //metodo capture
  metodo($event: any){
    this.metoh = $event.target.value
  }

  //transaction
  stripe(){
    fetch (`${this.url}payStripe`, {
      method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      plan_id: this.planID,
      username: this.infoPay.username,
      email: this.infoPay.email,
      amount: this.infoPay.amount
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
