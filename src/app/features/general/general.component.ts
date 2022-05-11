import { state, style, animate, transition, trigger } from '@angular/animations';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['../style.css'],

})
export class GeneralComponent implements OnInit {

  Data: any = [
  {
    img: "../../../assets/gmail.png",
    url: "https://mail.google.com/mail/u/0/#inbox"
  },{
    img: "../../../assets/github.png",
    url: "https://github.com/"
  },{
    img: "../../../assets/paypal.png",
    url: "https://www.paypal.com/it/home"
  },{
    img: "../../../assets/amazon.png",
    url: "https://www.amazon.it/"
  },{
    img: "../../../assets/reddit.png",
    url: "https://www.reddit.com/"
  },{
    img: "../../../assets/whatsapp.png",
    url: "https://web.whatsapp.com/"
  }
]

  constructor() { }

  ngOnInit(): void {

  }
  
}


