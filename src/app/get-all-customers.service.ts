import { Injectable } from '@angular/core';
import { Customer } from './model/Customer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAllCustomersService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  customers: Customer[];

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get(`${this.baseUrl}//getAllCustomers`)
      .pipe(map((res) => {
        //console.log(res)
        this.customers = res['data'];
        return this.customers;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
