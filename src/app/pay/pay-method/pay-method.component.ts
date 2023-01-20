import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

declare var paypal:any;

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.css']
})
export class PayMethodComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef

  title = 'angular-paypal-payment'
  url = environment.api
  form = {}
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.form = {
      email: 'Freddygm@gmail.com',
      monto: 100,
      username: 'sheylahawkins',
      name: 'freddy',
    }
    paypal
      .Buttons({
        createOrder: function (data: any, actions: any){
          // return this.http.post(`http://localhost:8888/api/orders`)
          //   .then((response: any)=> response.json())
          //   .then((order: any)=> order.id)
          return fetch("http://localhost:8888/api/orders", {
            method: "post",
            
            // use the "body" param to optionally pass additional order information
            // like product ids or amount
          })
            .then((response) => response.json())
            .then((order) => order.id);
        },
        onApprove: function (data:any, actions:any) {
          return fetch(`/api/orders/${data.orderID}/capture`, {
            method: "post",
          })
            .then((response) => response.json())
            .then((orderData) => {
              // Successful capture! For dev/demo purposes:
              console.log(
                "Capture result",
                orderData,
                JSON.stringify(orderData, null, 2)
              );
              var transaction =
                orderData.purchase_units[0].payments.captures[0];
              alert(
                "Transaction " +
                  transaction.status +
                  ": " +
                  transaction.id +
                  "\n\nSee console for all available details"
              );
              // When ready to go live, remove the alert and show a success message within this page. For example:
              // var element = document.getElementById('paypal-button-container');
              // element.innerHTML = '<h3>Thank you for your payment!</h3>';
              // Or go to another URL:  actions.redirect('thank_you.html');
            });
        },
        
        // Sets up the transaction when a payment button is clicked
        // createOrder: function (data: any, actions:any) {
        //   // return this.http.post(`${this.url}orders`)
        //   return fetch(`${this.url}orders`,{
        //     method: "post",
        //     // use the "body" param to optionally pass additional order information
        //     // like product ids or amount
        //   })
        //     .then((response:any) => response.json())
        //     .then((order:any) => order.id);
        // },
        // // Finalize the transaction after payer approval
        // onApprove: function (data: any, actions: any) {
        //   return fetch(`${this.url}orders/${data.orderID}`, {
        //     method: "post",
        //   })
        //     .then((response) => response.json())
        //     .then((orderData) => {
        //       // Successful capture! For dev/demo purposes:
        //       console.log(
        //         "Capture result",
        //         orderData,
        //         JSON.stringify(orderData, null, 2)
        //       );
        //       var transaction =
        //         orderData.purchase_units[0].payments.captures[0];
        //       alert(
        //         "Transaction " +
        //           transaction.status +
        //           ": " +
        //           transaction.id +
        //           "\n\nSee console for all available details"
        //       );
        //       // When ready to go live, remove the alert and show a success message within this page. For example:
        //       // var element = document.getElementById('paypal-button-container');
        //       // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        //       // Or go to another URL:  actions.redirect('thank_you.html');
        //     });
        // },
        onError: (err: any)=> {console.log(err)}
      })
      .render(this.paypalElement.nativeElement)
  }

}
