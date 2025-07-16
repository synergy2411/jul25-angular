import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Response Interceptor works!');

    return next.handle(req).pipe(
      // tap((response) => console.log('TAP : ', response)),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(() => new Error('404 - Not Found'));
        }
        if (error.status === 401) {
          return throwError(() => new Error('401 - Unauthorized'));
        }
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }
}
