import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAuthorArray'
})
export class AuthorArrayFormatPipe implements PipeTransform {

  transform(value: any): string {
    let array: any[] = []
    value.map((author: any)=>{
      array.push(author.name.replace(",", " "))
    })
    return array.toString();
  }

}