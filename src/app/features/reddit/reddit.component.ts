import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['../style.css']
})
export class RedditComponent implements OnInit {

  Data: any = [
    {
      title: "r/desktop",
      url: "https://www.reddit.com/r/desktops/"
    },{
      title: "r/startpages",
      url: "https://www.reddit.com/r/startpages/"
    },{
      title: "r/unixporn",
      url: "https://www.reddit.com/r/unixporn/"
    },{
      title: "r/halo",
      url: "https://www.reddit.com/r/halo/"
    },{
      title: "r/forza",
      url: "https://www.reddit.com/r/forza/"
    },{
      title: "r/tf2",
      url: "https://www.reddit.com/r/tf2/"
    },{
      title: "r/battlestations",
      url: "https://www.reddit.com/r/battlestations/"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
