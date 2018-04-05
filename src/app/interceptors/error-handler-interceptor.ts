import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch(errorResponse => {
        let errMsg: string;
        if (errorResponse instanceof HttpErrorResponse) {
          const err = errorResponse.message || JSON.stringify(errorResponse.error);
          errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
        } else {
          errMsg = errorResponse.message || errorResponse.toString();
        }
        return Observable.throw(errMsg);
      });
  }
}
