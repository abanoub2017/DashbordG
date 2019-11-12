import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router:Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      const loginLogicG =  !this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      const loginLogicF =  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

      if(loginLogicG || loginLogicF ){
        console.log('Wellcome');
        return true
      } else{
        this.router.navigate(['wellcome-social']);
        console.log('canceled');
        return false
        
      }

    
  }
  
}
