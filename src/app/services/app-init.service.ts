import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { languageOption } from '../interfaces/datas';
import { Observable, Subscriber, lastValueFrom } from 'rxjs';
import { ISO2Country } from '../interfaces/iso2-country';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  filterlanguages: languageOption[] = []
  private url: string = "https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json"

  constructor(private http: HttpClient) { }
  init(){
    return new Observable((subscriber)=>{
      this.http.get<ISO2Country[]>(this.url).subscribe({
        next: (data)=>{
          data.map((val: ISO2Country)=>{this.filterlanguages.push({title: val.alpha2.toLowerCase(), value: val.alpha2.toLowerCase()})})
        },
        error: ()=>{
          this.filterlanguages = [{ title: "en", value: "en" },
          { title: "fr", value: "fr" },
          { title: "fi", value: "fi" },]
          subscriber.complete()
        },
        complete: ()=>{
          subscriber.complete()
        }
      })
    })
  }
}
