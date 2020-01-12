import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Http Moduel
import { AddListRoutingModule } from './add-list-routing.module';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployComponent } from './edit-employ/edit-employ.component';
import { ContainerComponent } from './container/container.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';



@NgModule({
  declarations: [AddEmployeComponent, EmployeeListComponent, EditEmployComponent, ContainerComponent, DetailsEmployeComponent],
  imports: [
    CommonModule,
    AddListRoutingModule,
    
  ]
})
export class AddListModule { }
