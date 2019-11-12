import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeComponent } from "./add-employe/add-employe.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EditEmployComponent } from './edit-employ/edit-employ.component';

const routes: Routes = [
  {
    path: "",
    component: AddEmployeComponent,
    redirectTo:'',
    
  },
  {
    path: "employe-list",
    component: EmployeeListComponent
  },
  {
    path: "edit-employe:id",
    component: EditEmployComponent
  },
  {
    path:'**',
    component: AddEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListRoutingModule {}
