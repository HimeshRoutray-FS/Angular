import { Injectable } from '@angular/core';
import { Product } from './model/Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GetDealerDetailsService } from './get-dealer-details.service';
import { Dealer } from './model/Dealer';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  products: Product[];
  dealer: Dealer;
  
  constructor(private http: HttpClient, private getDealerDetailsService: GetDealerDetailsService) { }

  getProducts(): Observable<Product[]> {
    this.dealer = this.getDealerDetailsService.dealer;
    return this.http.get(`${this.baseUrl}` + '//getProducts?c=' + this.dealer.companyname)
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
