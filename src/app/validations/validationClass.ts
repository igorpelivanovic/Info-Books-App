import { AbstractControl } from "@angular/forms";

export class Validations{
    static searchValue( el: AbstractControl){
        let val = el.value.trim()
        if( val.length == 0) return { trim : true}
        return null
    }
}