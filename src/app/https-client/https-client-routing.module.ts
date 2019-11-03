import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';


const routes: Routes = [
  {
    path: '' , component: ContainerComponent
  },
  {
    path: 'add-issue' , component: AddIssueComponent
  },
  {
    // To make Route to edit Component make sure you add /:id
    path: 'edit-issue/:id', component: EditIssueComponent
  },
  {
    path: 'issue-list', component: IssueListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpsClientRoutingModule { }
