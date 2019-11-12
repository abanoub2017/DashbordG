import { HttpsClientRoutingModule } from './../https-client/https-client-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Http Moduel


import { AddListRoutingModule } from './add-list-routing.module';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployComponent } from './edit-employ/edit-employ.component';



@NgModule({
  declarations: [AddEmployeComponent, EmployeeListComponent, EditEmployComponent],
  imports: [
    CommonModule,
    AddListRoutingModule,
    HttpsClientRoutingModule
  ]
})
export class AddListModule { }
