import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Reactive Form
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [ReactiveFormsComponent, FormsModuleComponent, ContainerComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormModule { }
