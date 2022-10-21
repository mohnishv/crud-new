import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  GetById(id: string): Observable<any> {
    return this._http
      .get(environment.BaseURI + `/${id}`)
      .pipe(catchError(this.handleError));
  }
  GetAllData(): Observable<any> {
    return this._http
      .get(environment.BaseURI)
      .pipe(catchError(this.handleError));
  }
  PostData(data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this._http
      .post(environment.BaseURI, data, {
        headers: headers,
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }
  DeleteData(id: string): Observable<any> {
    return this._http
      .delete(environment.BaseURI + `/${id}`)
      .pipe(catchError(this.handleError));
  }
  EditData(id: string, data1: any): Observable<any> {
    const headers1 = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this._http
      .put(environment.BaseURI + `/${id}`, data1, {
        headers: headers1,
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let ErrorMessage = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        (ErrorMessage = `Backend returned code ${error.status}, body was: `),
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    ErrorMessage += 'Something bad happened; please try again later.';
    return throwError(() => new Error(ErrorMessage));
  }
}
