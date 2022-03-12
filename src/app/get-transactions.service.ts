import { Injectable } from '@angular/core';
import { Transaction } from './model/Transaction';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Dealer } from './model/Dealer';
import { GetDealerDetailsService } from './get-dealer-details.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionsService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  transactions: Transaction[];
  dealer: Dealer;
  
  constructor(private http: HttpClient, private getDealerDetailsService: GetDealerDetailsService) { }

  getTransactions(): Observable<Transaction[]> {
    this.dealer = this.getDealerDetailsService.dealer;
    return this.http.get(`${this.baseUrl}` + '//getTransactions?c=' + this.dealer.companyname)
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
  }
}
