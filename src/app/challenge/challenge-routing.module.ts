import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengOneComponent } from './challeng-one/challeng-one.component';
import { ContainerComponent } from './container/container.component';
import { DetailsItemComponent } from './challeng-one/details-item/details-item.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  },
  {
    path: 'challengOne',
    component: ChallengOneComponent,
  },
  {
    path: ':id',
    component: DetailsItemComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
