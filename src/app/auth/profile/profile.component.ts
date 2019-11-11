import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// Socila media Login
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Socila media Login
   user: SocialUser;
   loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router :Router
    ) { }

  ngOnInit() {
    
    // Socila media Login
    this.authService.authState.subscribe((user) => {
      console.log(user);
      
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signOut(): void {
    this.authService.signOut();
    console.log('logOut');
    this.router.navigateByUrl('')
    
  }

}
