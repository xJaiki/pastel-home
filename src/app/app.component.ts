import { Component, ComponentFactoryResolver } from '@angular/core';
import * as $ from "jquery";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ display: 'none'}),
            animate('75ms ease-out', 
                    style({
                      display: 'block',
                    }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ display: 'block' }),
            animate('75ms ease-out', 
                    style({ display: 'none' }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  title = 'provStart';

  tabIndex = 1 ;
  el = document.getElementById("prova");
  timer:any;

  hover(index: number){
    this.timer = setTimeout(() => {
      this.tabIndex = index;
      console.log(this.tabIndex)
    }, 75);
  }

  leave(){
    clearTimeout(this.timer)
  }


}

