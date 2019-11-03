import { Injectable } from '@angular/core';
import { Bug } from '../shared/bug';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  // Basic Url (Json)
  baseUrl = 'http://localhost:3004/';

  constructor(
    private http: HttpClient
  ) { }

  // Http Header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  // POST
  CreatBug(data): Observable<Bug> {
    return this.http.post<Bug>(`${this.baseUrl}bugtracking`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET All Data
  GetIssues(): Observable<Bug> {
    return this.http.get<Bug>(`${this.baseUrl}bugtracking`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET Data By Id
  GetIssue(id): Observable<Bug> {
    return this.http.get<Bug>(`${this.baseUrl}bugtracking/${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT DATA ===> Update
  UpdateBug(id, data): Observable<Bug> {
    return this.http.put<Bug>(`${this.baseUrl}bugtracking/${id}`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Detelt By Id
  DeletBug(id): Observable<Bug> {
    return this.http.delete<Bug>(`${this.baseUrl}bugtracking/${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Error Handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get Clinet Side Error
      errorMessage =  error.error.message;
    } else {
      // Get Sever SIide Error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}

