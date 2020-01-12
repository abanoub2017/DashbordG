import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { challengeOne } from 'src/app/shared/challenge-one';

@Injectable({
  providedIn: 'root'
})
export class ChallengeOneService {

  basUrl = 'http://localhost:3004/'

  constructor(
    private http: HttpClient,
  ) { }

  // Http Options
  httpOption = {
    header: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  getAllProduct(): Observable<challengeOne> {
    return this.http.get<challengeOne>(`${this.basUrl}challengeOne`)
    .pipe(
      retry(1)
    );
  }

  getProduct(id: number) {
    return this.http.get<challengeOne>(`${this.basUrl}challengeOne/${id}`)  }

}
