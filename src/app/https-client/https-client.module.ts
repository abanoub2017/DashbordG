import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpsClientRoutingModule } from './https-client-routing.module';
import { ContainerComponent } from './container/container.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';


@NgModule({
  declarations: [ContainerComponent, AddIssueComponent, EditIssueComponent, IssueListComponent],
  imports: [
    CommonModule,
    HttpsClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HttpsClientModule { }
