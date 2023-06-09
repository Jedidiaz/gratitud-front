import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


declare var paypal: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const paypalRender = this.paypalElement.nativeElement
    function loadAsync(url: any, callback: any) {
      var s = document.createElement('script');
      s.setAttribute('src', url); s.onload = callback;
      document.head.insertBefore(s, document.head.firstElementChild);
    }

    loadAsync('https://www.paypal.com/sdk/js?client-id=AW44U8epcESMROONuZgFbEn-FCnFlQINGIl-s4iPNVIdc-7-FNipAesAgTCAkXVn5CgvGavuNSi3PIWn&currency=USD&intent=capture', function(){
      paypal
        .Buttons({
          // Sets up the transaction when a payment button is clicked
          createOrder: function (data: any, actions: any) {
            return fetch(`http://25.78.142.190:9000/api/orders`, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount: '70.00',
              }),
              // use the "body" param to optionally pass additional order information
              // like product ids or amount
            })
              .then((response) => response.json())
              .then((order) => order.id);
          },
          // Finalize the transaction after payer approval
          onApprove: function (data: any, actions: any) {
            return fetch(
              `http://25.78.142.190:9000/api/orders/${data.orderID}/capture`,
              {
                method: 'post',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify({
                  email: 'infoPay.email',
                  username: 'infoPay.username',
                  name: 'infoPay.name',
                  amount: '100',
                }),
              }
            )
              .then((response) => response.json())
              .then((orderData) => {
                // Successful capture! For dev/demo purposes:
                console.log(
                  'Capture result',
                  orderData,
                  JSON.stringify(orderData, null, 2)
                );
                var transaction =
                  orderData.purchase_units[0].payments.captures[0];
                if (transaction.status === 'COMPLETED') {
                  window.location.href = '/lista-regalos';
                }
                // When ready to go live, remove the alert and show a success message within this page. For example:
                // var element = document.getElementById('paypal-button-container');
                // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
              });
          },
        })
        .render(paypalRender);
    })
  }

  openSnackBar() {
    this.snackBar.open('Se perdió la conexión', 'ok', {
      duration: 3000
    });
  }

}
