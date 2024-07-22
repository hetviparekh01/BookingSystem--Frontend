import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetlocalstoragedataService } from '../services/getlocalstoragedata.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localstorage: GetlocalstoragedataService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.localstorage.getToken();

    if (authToken) {
      // Clone the request and attach the token
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      return next.handle(authReq);
    }

    // If there is no token, pass the original request
    return next.handle(request);
  }
}
