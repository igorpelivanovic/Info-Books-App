import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/datas';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input("item") item !: Book 

  constructor(protected icons: IconsService) { }

  ngOnInit(): void {
  }
  defaultImg(event: Event):void{
      let element = event.target as HTMLInputElement
      element.src = "./../../../assets/no-image.png"
  }
}
