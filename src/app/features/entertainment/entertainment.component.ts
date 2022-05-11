import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['../style.css']
})
export class EntertainmentComponent implements OnInit {

  Data: any = [
    {
      img: "../../../assets/netflix.png",
      url: "https://www.netflix.com/browse"
    },{
      img: "../../../assets/youtube.png",
      url: "https://www.youtube.com/"
    },{
      img: "../../../assets/facebook.png",
      url: "https://www.facebook.com/"
    },{
      img: "../../../assets/twitch.png",
      url: "https://www.twitch.tv/"
    },{
      img: "../../../assets/tiktok.png",
      url: "https://www.tiktok.com/"
    },{
      img: "../../../assets/spotify.png",
      url: "https://open.spotify.com/"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
