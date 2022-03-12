import { Injectable } from '@angular/core';
import { Transaction } from './model/Transaction';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateTransactionService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  transaction: Transaction;

  constructor(private http: HttpClient) { }

  storeTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post(`${this.baseUrl}//createTransaction`, JSON.stringify({ data: transaction }))
      .pipe(map((res) => {
        //console.log(res)
        this.transaction = res['data'];
        return this.transaction;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong. Try again later.');
  }}
