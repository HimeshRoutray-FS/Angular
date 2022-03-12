import { Injectable } from '@angular/core';
import { Customer } from './model/Customer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerKycService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  customer: Customer;

  constructor(private http: HttpClient) { }

  storeCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(`${this.baseUrl}//customerKYC`, JSON.stringify({ data: customer }))
      .pipe(map((res) => {
        //console.log(res)
        this.customer = res['data'];
        return this.customer;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    if(error.status == 422){
      return throwError('Customer already exists.');
    }
    else{
      return throwError('Error! something went wrong. Try again later.');
    }
  }
}
