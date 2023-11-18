import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken,
  HttpUrlEncodingCodec,
  HttpParams,
  HttpParameterCodec
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const CACHE_PROXY = new HttpContextToken<boolean>(()=> false)

export function cacheProxy(): HttpContext{
  return new HttpContext().set(CACHE_PROXY, true)
}

@Injectable()
export class RequestInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(CACHE_PROXY)){
      let params = new HttpParams()
      let newRequset = request.clone({url : environment.proxyServerUrl+encodeURIComponent(`${request.url}?${request.params.toString()}`), params: params})
      return next.handle(newRequset);
    }
    return next.handle(request)
  }
}
