import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appHeaderTitle]'
})
export class appHeaderTitleDirective implements AfterViewInit{

  constructor(private element: ElementRef, private route: ActivatedRoute) { }
  ngAfterViewInit(): void {
    if(this.route.snapshot.queryParams['search']){ this.setInnerHtml(`search results for "${this.route.snapshot.queryParams['search']}"`); return}
    if(this.route.snapshot.queryParams['subject']) {this.setInnerHtml(`search results for "${this.route.snapshot.queryParams['subject']}"`); return}
    this.setInnerHtml("popular now")
  }
  setInnerHtml(val: string): void{
    this.element.nativeElement.innerText = val
  }

  

}
