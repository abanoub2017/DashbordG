import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeList } from 'src/app/shared/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  
  basicUrl = 'http://localhost:3004/'

  constructor(
    private httpBody: HttpClient,
  ) { }

// Make Header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  // Get All Data 
  getAllEmploye(): Observable<EmployeeList>{

    return  this.httpBody.get<EmployeeList>(`${this.basicUrl}employes`)
    .pipe(
      retry(1),
    )
  }

  // Get All Data By Id
  getEmploye(id: number): Observable<EmployeeList>{
    return this.httpBody.get<EmployeeList>(`${this.basicUrl}employes/${id}`)
    .pipe(
      retry(1),
    )
  }


  // Add Employe By  Data 
  addEmploy(data: EmployeeList): Observable<EmployeeList>{
    return this.httpBody.post<EmployeeList>(`${this.basicUrl}employes`, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1)
    )
  }

}
