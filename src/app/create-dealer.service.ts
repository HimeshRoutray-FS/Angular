import { Injectable } from '@angular/core';
import { Dealer } from './model/Dealer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateDealerService {
  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  dealer: Dealer;

  constructor(private http: HttpClient) { }

  storeDealer(dealer: Dealer): Observable<Dealer> {
    return this.http.post(`${this.baseUrl}//createDealer`, JSON.stringify({ data: dealer }))
      .pipe(map((res) => {
        //console.log(res)
        this.dealer = res['data'];
        return this.dealer;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    if(error.status == 422){
      return throwError('Dealer already exists.');
    }
    else{
      return throwError('Error! something went wrong. Try again later.');
    }
  }
}
