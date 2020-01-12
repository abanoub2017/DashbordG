import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengOneComponent } from './challeng-one/challeng-one.component';
import { ContainerComponent } from './container/container.component';
import { DetailsItemComponent } from './challeng-one/details-item/details-item.component';


@NgModule({
  declarations: [ChallengOneComponent, ContainerComponent, DetailsItemComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule
  ]
})
export class ChallengeModule { }
