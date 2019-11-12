import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

//  Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Soical Media
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider  } from "angularx-social-login"; 
import { AuthGuard } from '../GeneralGurd/login-registration/auth.guard';
import { WellcomeSocialComponent } from './wellcome-social/wellcome-social.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("409683624427-dbrvitur9nteb6rnv624mdb3nj07s39a.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("437279160544252")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [LoginComponent, ProfileComponent, WellcomeSocialComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    SocialLoginModule
    
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthGuard
  ],
})
export class AuthModule { }
