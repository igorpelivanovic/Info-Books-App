import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "./../pipes/pipes.module"
import { BookPageRoutingModule } from './book-page-routing.module';
import { BookPageComponent } from './book-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguagesFormatPipe, CarouselItemsFormatPipe} from './pipes/pipes.pipe';
import { DownloadContainerComponent } from './downloadBox/download-container/download-container.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselDefaultItemComponent } from './carousel/carousel-default-item/carousel-default-item.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';



@NgModule({
  declarations: [
    BookPageComponent,  LanguagesFormatPipe, DownloadContainerComponent, CarouselComponent, CarouselItemComponent, CarouselDefaultItemComponent, CarouselItemsFormatPipe
  ],
  imports: [
    CommonModule,
    BookPageRoutingModule,
    FontAwesomeModule,
    PipesModule
  ]
})
export class BookPageModule { }
