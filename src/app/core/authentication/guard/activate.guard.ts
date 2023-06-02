import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@autservice/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivateGuard  {
  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  public getActive() {
    this.auth.activate().subscribe((repo: any) => {
      if (repo == false) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    });
  }

  canActivate(): any {}

  canActivateChild(): any {
    this.getActive();
  }
}
