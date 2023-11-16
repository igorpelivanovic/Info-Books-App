import { Injectable } from '@angular/core';
import { FilterFormValue, filterBoxValues, languageOption, languageValue } from '../interfaces/datas';
import { ActivatedRoute,  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppInitService } from './app-init.service';
import { ISO2Country } from '../interfaces/iso2-country';

@Injectable({
  providedIn: 'root'
})
export class FilterBoxService {

  private renderContainer: boolean = false
  options = {
    languages: this.appInitService.filterlanguages.sort(( a, b )=>{
      if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
    }),
    century: {
      min: 0,
      max: this.getCurrentCentuty()
    }
  }
  currentValue: filterBoxValues = this.setDefaultValue()


  constructor(private appInitService : AppInitService,private httpService: HttpClient,private route: ActivatedRoute, private router: Router) { }

  get render(): boolean {
    return this.renderContainer
  }
  get value() {
    return this.currentValue
  }
  get option() {
    return this.options
  }
  private getCurrentCentuty(): number {
    return Math.floor((new Date().getFullYear() - 1) / 100) + 1
  }
  private setDefaultValue(): filterBoxValues {
    this.getLangFromParams()
    return {
      languages: this.getLangFromParams(),
      copyRight: this.formatDefaultCr(),
      century: {
        min: this.formatDefaultMinCentury(),
        max: this.formatDefaultMaxCentury()
      }
    }
  }
  private formatDefaultMinCentury(): number{
    return this.route.snapshot.queryParams['minCentury'] || this.options.century.min
  }
  private formatDefaultMaxCentury(): number{
    return this.route.snapshot.queryParams['maxCentury'] || this.options.century.max
  }
  private addQueryParams(): void {
    this.router.navigate([], {
      queryParams: {
        cr: this.value.copyRight,
        minCentury: this.value.century.min,
        maxCentury: this.value.century.max,
        lang: this.formatLangQueryParams()
      },
      queryParamsHandling: 'merge',
    })
  }
  private getLangFromParams():languageValue[] {
    let arrayParms : String[] = this.route.snapshot.queryParams["lang"] ? this.route.snapshot.queryParams["lang"].split(",") : []
    return this.options.languages.map(option=>{
      option.checked = arrayParms.includes(option.value) ? true : false
      return option
    }) as languageValue[]
    
  }
  private formatDefaultCr() : boolean{
    return this.route.snapshot.queryParams['cr'] == "true" ? true : false
  }
  private formatLangQueryParams(): string | undefined {
    let array: string[] = []
    this.value.languages.map((lang) => {
      lang.checked ? array.push(lang.value) : null
    })
    return array.length > 0 ? array.toString() : undefined
  }
  private resetQueryParams(): void {
    this.router.navigate([], {
      queryParams: {
        cr: undefined,
        minCentury: undefined,
        maxCentury: undefined,
        lang: undefined
      },
      queryParamsHandling: 'merge',
    })
  }
  show(): void {
    this.renderContainer = true
  }
  hide(): void {
    this.renderContainer = false
  }
  toogle(): void {
    this.renderContainer = !this.render
  }
  
  addValues(values: FilterFormValue): filterBoxValues {
    this.currentValue.copyRight = Boolean(values.copyRightValue)
    this.currentValue.century.max = values.maxCenturyValue
    this.currentValue.century.min = values.minCenturyValue
    this.currentValue.languages.map((language, index) => {
      language.checked = values.languages[index]
    })
    this.addQueryParams()
    return this.currentValue
  }
  resetValue(): filterBoxValues {
    this.resetQueryParams()
    return this.currentValue = this.setDefaultValue()
  }
}
