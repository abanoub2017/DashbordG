import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {
    path: '' , component: ContainerComponent
  },
  {
    path: 'reactive-form' , component: ReactiveFormsComponent
  },
  {
    path: 'form-modules' , component: FormsModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
