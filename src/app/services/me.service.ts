import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MeService {
  constructor(private _httpClient: HttpClient, private _storage: Storage) {
  }

  currentlyLoginUser(): Observable<any> {
    return this._httpClient.get<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/me').pipe(
      map((currentUserData) => ({
        role: currentUserData.data.user.context.role,
        id: currentUserData.data.user.id
      })),
      tap((currentUserData) => this._storage.setItem('role', currentUserData.role ))          //how to trigger that method without creating a property in component and async in HTML
    );

  }

  hasRole(role: string): Observable<boolean> {
    return of(this._storage.getItem('role') === role)
  }
}
