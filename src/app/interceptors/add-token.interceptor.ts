import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService, private _storage: Storage) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken2 = this._storage.getItem('accessToken')
    
    const updatedRequest: HttpRequest<any> = request.clone({setHeaders: {Authorization: `Bearer ${accessToken2}`}})
    updatedRequest.headers.set('Authorization', `Bearer ${accessToken2}`)
    return next.handle(updatedRequest);
  }
}
