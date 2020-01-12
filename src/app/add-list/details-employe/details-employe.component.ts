import {
  Router,
  RouterLinkActive,
  ActivatedRoute,
  Params
} from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { EmployesService } from "src/app/service/employes/employes.service";
import { EmployeeList } from "src/app/shared/employe";

@Component({
  selector: "app-details-employe",
  templateUrl: "./details-employe.component.html",
  styleUrls: ["./details-employe.component.scss"]
})
export class DetailsEmployeComponent implements OnInit {
  detailesEmployee: EmployeeList;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private employee: EmployesService
  ) {
    
  }

  ngOnInit() {
    this.id = this.route.params['id'];
        this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.getEmployeeById(this.id);
  }

  getEmployeeById(id: number) {
    this.employee.getEmploye(id).subscribe(res => {
      this.detailesEmployee = res;
      console.log(this.detailesEmployee);
    });
  }
}
