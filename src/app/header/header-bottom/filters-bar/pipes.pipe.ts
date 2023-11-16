import { Pipe, PipeTransform } from '@angular/core';
import { languageOption, languageValue } from 'src/app/interfaces/datas';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(controls : any, searchVal: string, arrayLabels: languageValue[]){
    searchVal = searchVal.trim()
    if(searchVal.length == 0) return controls
    let newControls: any = []
    arrayLabels.map(((arrayLabel : languageValue, index)=>{
      if(arrayLabel.title.startsWith(searchVal)){
        newControls.push(controls[index])
      }
    }))
    return newControls
  }

}
