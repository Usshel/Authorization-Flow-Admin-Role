import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._storage.getItem('accessToken'));
  public accessToken$: Observable<string | null> = this._accessTokenSubject.asObservable();

  constructor(private _httpClient: HttpClient, private _storage: Storage) {
  }

  login(userEmail: string, userPassword: string): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login',
      { data: { email: userEmail, password: userPassword } }).pipe(
        map((credentials) => ({
        accessToken: credentials.data.accessToken,
        id: credentials.data.id
    })),
    tap((credentials) => {this._accessTokenSubject.next(credentials.accessToken),this._storage.setItem('accessToken', credentials.accessToken)}));
  }

  adminLogin(adminLogin: string, adminPassword: string): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login-admin',
      { data: { email: adminLogin, password: adminPassword } }).pipe(
        map((credentials) => ({
            accessToken: credentials.data.accessToken,
            id: credentials.data.id
        })),
        tap((credentials) => this._storage.setItem('accessToken', credentials.accessToken))
      );
  }


}
