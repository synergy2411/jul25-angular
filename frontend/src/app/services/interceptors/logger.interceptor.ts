import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Logger Interceptor works!');

    // console.log('OUTGOING REQUEST :', req);

    const clonedReq = req.clone({
      params: new HttpParams().set('auth', this.authService.getToken()),
    });

    // console.log('CLONE REQUEST :', clonedReq);
    return next.handle(clonedReq);
  }
}
