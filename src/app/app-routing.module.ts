import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '' ,
     loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'forms' ,
     loadChildren: () => import(`./form/form.module`).then(m => m.FormModule)
  },
  {
    path: 'add-list', 
    loadChildren: () => import(`./add-list/add-list.module`).then(m => m.AddListModule)
  },
  {
    path: 'https-client',
     loadChildren: () => import(`./https-client/https-client.module`).then(m => m.HttpsClientModule)
  },
  {
    path:'challenge',
    loadChildren: () => import(`./challenge/challenge.module`).then(m => m.ChallengeModule)

  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
