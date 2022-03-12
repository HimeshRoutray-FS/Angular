import { Injectable } from '@angular/core';
import { Dealer } from './model/Dealer';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllDealersService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  dealers: Dealer[];

  constructor(private http: HttpClient) { }

  getAllDealers(): Observable<Dealer[]> {
    return this.http.get(`${this.baseUrl}//getAllDealers`)
      .pipe(map((res) => {
        //console.log(res)
        this.dealers = res['data'];
        return this.dealers;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
