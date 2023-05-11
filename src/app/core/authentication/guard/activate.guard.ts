import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@autservice/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivateGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  public getActive() {
    console.log(this.auth.activate());
    if (this.auth.activate() == false) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }

  canActivate(): any {
    console.log('its working 1');
  }

  canActivateChild(): any {
    this.getActive();
    console.log('its working 2');
  }
}
