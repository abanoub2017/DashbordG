import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
// Socila media Login
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 returnUrl:string;
  
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
    ) { }

  ngOnInit() {
    // router to profile
    // this.returnUrl =  this.router.routerState.snapshot.queryParams['returnUrl'] || '/profile';
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      console.log(res);
      // this.ngZone.run(() => this.router.navigateByUrl('/profile'));
      this.router.navigateByUrl('/profile');
    });
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      console.log(res);
      // this.ngZone.run(() => this.router.navigateByUrl('/profile'));
      this.router.navigateByUrl('/profile');
    });
  } 
 


}
