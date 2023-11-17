import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Books } from '../interfaces/datas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private http : HttpClient) { }
  getDatas(queryParams: any):Observable<Books>{
    let params = new HttpParams()
    queryParams.forEach((value: any, key: string)=>{
      params = params.set(key, value)
    })
    let header = new HttpHeaders()
    header.set('Access-Control-Allow-Origin', '*')
    return this.http.get<Books>(environment.proxyServerUrl+'?quest='+environment.datasServerUrl+params.toString(), {
      headers: header,
    })
  }
}
