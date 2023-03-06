import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MeService } from '../services/me.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private _router: Router, private _storage: Storage) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (this._storage.getItem('role')?.toLocaleLowerCase() === route.data['role'])
    ? true
    : this._router.parseUrl(route.data['redirectUrl'])
  }

}
