import { Injectable } from '@angular/core';
import { Product } from './model/Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  product: Product;

  constructor(private http: HttpClient) { }

  storeProduct(product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}//createProduct`, JSON.stringify({ data: product }))
      .pipe(map((res) => {
        //console.log(res)
        this.product = res['data'];
        return this.product;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong. Try again later.');
  }
}
