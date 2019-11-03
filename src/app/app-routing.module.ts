import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'forms' , loadChildren: () => import(`./form/form.module`).then(m => m.FormModule)
  },
  {
    path: 'add-list', loadChildren: () => import(`./add-list/add-list.module`).then(m => m.AddListModule)
  },
  {
    path: 'https-client', loadChildren: () => import(`./https-client/https-client.module`).then(m => m.HttpsClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
