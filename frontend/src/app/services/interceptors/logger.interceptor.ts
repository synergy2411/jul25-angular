import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Logger Interceptor works!');

    console.log('OUTGOING REQUEST :', req);

    const clonedReq = req.clone({
      headers: new HttpHeaders().set('authorization', 'Bearer TOKEN_VALUE'),
    });

    console.log('CLONE REQUEST :', clonedReq);
    return next.handle(clonedReq);
  }
}
