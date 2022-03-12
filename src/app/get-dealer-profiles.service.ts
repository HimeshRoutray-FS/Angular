import { Injectable } from '@angular/core';
import { User } from './model/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDealerProfilesService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  users: User[];

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}//getAllUsers`)
      .pipe(map((res) => {
        //console.log(res)
        this.users = res['data'];
        return this.users;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
