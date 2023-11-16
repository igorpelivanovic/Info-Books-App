import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Books } from '../interfaces/datas';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  private url: string = "http://gutendex.com/books"

  constructor(private http : HttpClient) { }
  getDatas(queryParams: any):Observable<Books>{
    let params = new HttpParams()
    queryParams.forEach((value: any, key: string)=>{
      params = params.set(key, value)
    })
    return this.http.get<Books>(this.url,{
        params: params
    })
  }
}
