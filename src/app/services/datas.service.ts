import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Books } from '../interfaces/datas';
import { environment } from 'src/environments/environment';
import { cacheProxy } from '../interceptors/request-interceptor.interceptor';

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
    return this.http.get<Books>(environment.datasServerUrl, {
      params: params,
      context: cacheProxy()
    })
  }
}