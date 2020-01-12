import { EmployeeList } from 'src/app/shared/employe';
import { Component, OnInit, NgZone } from '@angular/core';
import { EmployesService } from 'src/app/service/employes/employes.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  allData: EmployeeList;

  constructor(
    private employesService: EmployesService,
    private NgZone: NgZone
  ) { }

  ngOnInit() {
    this.getListEmploye();
  }


 getListEmploye(){
   this.employesService.getAllEmploye().subscribe( res =>{
     this.allData =  res;
   })
 }


}
