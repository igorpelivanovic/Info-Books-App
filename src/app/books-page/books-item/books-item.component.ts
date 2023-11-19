import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/datas';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.scss']
})
export class BooksItemComponent implements OnInit {

  @Input() book!: Book; 



  constructor(protected icons: IconsService) { }

  ngOnInit(): void {
  }
  errorImg(event: Event):void{
    let element = event.target as HTMLInputElement
    element.src = "assets/no-image.png"
  }
}
