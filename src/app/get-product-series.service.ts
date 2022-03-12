import { Injectable } from '@angular/core';
import { Product } from './model/Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductSeriesService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  products: Product[];
  
  constructor(private http: HttpClient) { }

  getProductSeries(companyname: string,productname: string): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}` + '//getProductSeries?c=' + companyname + '&' + 'p=' + productname)
      .pipe(map((res) => {
        //console.log(res)
        this.products = res['data'];
        return this.products;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
