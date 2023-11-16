import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-carousel-default-item',
  templateUrl: './carousel-default-item.component.html',
  styleUrls: ['./carousel-default-item.component.scss']
})
export class CarouselDefaultItemComponent implements OnInit {

  constructor(protected icons: IconsService) { }

  ngOnInit(): void {
  }

}
