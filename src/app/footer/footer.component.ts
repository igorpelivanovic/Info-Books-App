import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger("btn", [
      transition(":enter", [
        style({
          opacity: 0
        }),
        animate("300ms", style({
          opacity: 1
        }))
      ]),
      transition(":leave", [
        style({
          opacity: 1
        }),
        animate("300ms", style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  icons = {
    faChevronUp: faChevronUp
  }
  renderBtn : boolean = false
  window = this.document.defaultView

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(){
    this.checkScroll()
  }

  checkScroll():void{
    if(this.document.documentElement.scrollTop > 50) {
      this.renderBtn = true
      return
    }
    this.renderBtn = false
  }

  goToTopPage():void{
    this.window?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  ngOnInit(): void {
    this.checkScroll()
  }

}
