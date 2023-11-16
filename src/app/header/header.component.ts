import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("header", [
      transition(":leave", [
        query("@loadHeaderBtns", animateChild())
      ])
    ])
  ]
  

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("init")
  }

}
