import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAuthor'
})
export class AuthorFormatPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(",", " ");
  }

}

