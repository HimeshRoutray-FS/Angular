import { Injectable } from '@angular/core';
import { User } from './model/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateDealerProfileService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  user: User;

  constructor(private http: HttpClient) { }

  storeDealerProfile(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}//createProfile`, JSON.stringify({ data: user }))
      .pipe(map((res) => {
        //console.log(res)
        this.user = res['data'];
        return this.user;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    if(error.status == 422){
      return throwError('Company Name does not exist or Dealer profile already created.');
    }
    else{
      return throwError('Error! something went wrong. Try again later.');
    }
  }}
