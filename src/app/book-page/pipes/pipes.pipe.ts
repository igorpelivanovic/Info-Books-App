import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "src/app/interfaces/datas";

@Pipe({
name: 'formatLanguages'
})
export class LanguagesFormatPipe implements PipeTransform {

transform(arr: any): string {
    return arr.toString()
}

}

@Pipe({
    name: 'formatCarouselItems'
    })
    export class CarouselItemsFormatPipe implements PipeTransform {
    
    transform(items: Book[], id: number): Book[] {
        return items.filter((item)=>item.id != id)
    }
    
    }
  