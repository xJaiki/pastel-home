import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../style.css']
})
export class EducationComponent implements OnInit {

  Data: any = [
    {
      img: "../../../assets/udemy.png",
      url: "https://www.udemy.com/"
    },{
      img: "../../../assets/uni.png",
      url: "https://uniparthenope.esse3.cineca.it/auth/studente/HomePageStudente.do"
    },{
      img: "../../../assets/stackoverflow.png",
      url: "https://stackoverflow.com/"
    },{
      img: "../../../assets/mdn.png",
      url: "https://developer.mozilla.org/en-US/"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
