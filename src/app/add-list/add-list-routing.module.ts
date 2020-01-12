import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeComponent } from "./add-employe/add-employe.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EditEmployComponent } from './edit-employ/edit-employ.component';
import { ContainerComponent } from './container/container.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';

const routes: Routes = [
  {
    path:'',
    component: ContainerComponent,
    redirectTo:'',
  },
  {
    path: "add-employe",
    component: AddEmployeComponent,
  },
  {
    path: "employe-list",
    component: EmployeeListComponent

  },
  {
    path: "edit-employe/:id",
    component: EditEmployComponent
  },
  {
    path:'detials-employes/:id',
    component:DetailsEmployeComponent

  }
  ,{
    path:'**',
    component: AddEmployeComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListRoutingModule {}
