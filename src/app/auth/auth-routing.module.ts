import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../GeneralGurd/login-registration/auth.guard';
import { WellcomeSocialComponent } from './wellcome-social/wellcome-social.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'profile',
     component: ProfileComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'wellcome-social',
    component: WellcomeSocialComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
