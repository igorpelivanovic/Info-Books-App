import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[checkMinValCentury]'
})
export class MinCenturyValueDirective implements AfterViewInit{

  @Input() maxVal!: Number

  constructor( private element : ElementRef, private control : NgControl ) { }

  
  ngAfterViewInit(): void {
  }

  @HostListener("input")
    onKeyDown(){
      let curentVal : Number = Number(this.element.nativeElement.value)
      if(this.maxVal < curentVal)this.control.control?.setValue(this.maxVal)
    }
}

@Directive({
  selector: '[checkMaxValCentury]'
})
export class MaxCenturyValueDirective implements AfterViewInit{

  @Input() minVal!: Number

  constructor( private element : ElementRef, private control : NgControl ) { }

  
  ngAfterViewInit(): void {
  }

  @HostListener("input")
    onKeyDown(){
      let curentVal : Number = Number(this.element.nativeElement.value)
      if(this.minVal > curentVal) this.control.control?.setValue(this.minVal)
    }
}

@Directive({
  selector: '[clickedOutside]'
})
export class ClickedOutSideDirective implements AfterViewInit{


  constructor( private element : ElementRef, @Inject(DOCUMENT) private document : Document) { }

  @Output() public clickedOutside = new EventEmitter()
  
  ngAfterViewInit(): void {
  }
  @HostListener("document:click", ['$event.target'])
  onClick(target : any){
    let clickInside = this.element.nativeElement.contains(target)
    if(!clickInside){
      this.clickedOutside.emit(target)
    }
  }

  
}
