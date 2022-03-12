import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi//login?';
  user: User;
  
  constructor(private http: HttpClient) { }

  getLoginResponse(username: string, password: string): Observable<User> {
    return this.http.get(`${this.baseUrl}` + 'u=' + username + '&' + 'p=' + password).pipe(
      map((res: User) => {
        //console.log(res);
        this.user = res;
        return this.user;
    }), catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}
