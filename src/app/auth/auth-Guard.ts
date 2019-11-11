import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.signIn(GoogleLoginProvider.PROVIDER_ID) || this.userService.signIn(FacebookLoginProvider.PROVIDER_ID) ) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}