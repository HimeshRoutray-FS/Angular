import { Injectable } from '@angular/core';
import { Transaction } from './model/Transaction';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionReportService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  transactions: Transaction[];
  
  constructor(private http: HttpClient) { }

  getTransactionsReport(companyname: string): Observable<Transaction[]> {
    return this.http.get(`${this.baseUrl}` + '//getTransactions?c=' + companyname)
      .pipe(map((res) => {
        //console.log(res)
        this.transactions = res['data'];
        return this.transactions;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }}
