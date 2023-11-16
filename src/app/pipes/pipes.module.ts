import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorArrayFormatPipe } from './pipes.pipe';



@NgModule({
  declarations: [
    AuthorArrayFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ AuthorArrayFormatPipe ]
})
export class PipesModule { }

