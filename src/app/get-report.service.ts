import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Report } from './model/Report';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetReportService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  report: Report[];
  
  constructor(private http: HttpClient) { }

  getReport(): Observable<Report[]> {
    return this.http.get(`${this.baseUrl}` + '//report')
      .pipe(map((res) => {
        //console.log(res)
        this.report = res['data'];
        return this.report;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
