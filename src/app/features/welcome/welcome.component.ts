import { Component, OnInit } from '@angular/core';

import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['../style.css']
})
export class WelcomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) docuemnt:Document) {
    var number = document.getElementById("number");
    var month = document.getElementById("month");
  }



  ngOnInit(): void {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
    const d = new Date();
    let day = weekday[d.getDay()];
    let month = months[d.getMonth()];
    var x = document.getElementById("number")!
    document.getElementById("day")!.innerHTML = day;
    x.innerHTML = String(d.getDate());
    document.getElementById("month")!.innerHTML = month;

    var rnd = Math.floor(Math.random()*14)
    const greetingsText=["Ciao", "Hello", "Hi", "Hey", "Sup bro", "Sup", "How are you?", "Nice to see you", "Yo!", "What's up?", "Heyyy", "Hiya!", "Ahoy", "Hello stranger"];
    document.getElementById("greetings")!.innerHTML = greetingsText[rnd]
    console.log(greetingsText.length);

    const apiKey = "d5932447ed5cdf742b1f1f2e38cd6e61";
    const inputVal = "New York"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
                }@2x.png`;


            const weatherMarkup = `${Math.round(main.temp)}`

            const image = `<img style="width: 2em; top:1vw; position: relative" src=${icon} alt=${weather[0]["main"]}>`;

            document.getElementById("wheaterIcon")!.innerHTML = image;
            document.getElementById("temp")!.innerHTML = weatherMarkup;
        })

  }

}
