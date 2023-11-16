import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  private render: boolean = false

  constructor(@Inject(DOCUMENT) private document : Document) { }

  openDialog():void{
    this.render = true
    this.document.body.style.overflow='hidden'
  }
  closeDialog():void{
    this.render = false
    this.document.body.style.overflow='visible'
  }
  hasOpen():boolean{
    return this.render
  }

}
