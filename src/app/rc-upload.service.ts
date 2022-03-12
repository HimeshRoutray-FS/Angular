import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RcUploadService {

  baseUrl = 'https://aarconadvantage.info//aarconadvantageapi';
  rcUrl: string;

  constructor(private http: HttpClient) { }

  uploadFile(data: FormData): Observable<string> {
    return this.http.post(`${this.baseUrl}//rcUpload`, data)
      .pipe(map((res) => {
        this.rcUrl = res['url'];
        return this.rcUrl;
      }),
      catchError(this.handleError));
}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong. Try again later.');
  }
  
}
