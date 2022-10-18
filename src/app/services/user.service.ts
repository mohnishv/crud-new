import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private _http: HttpClient) {
  }
  getById(id: string): Observable<any> {
    return this._http.get(environment.BaseURI + `/${id}`);
  }
  getAllData(): Observable<any> {
    return this._http.get(environment.BaseURI)
 }
 postData(data: any): Observable<any> {
  const headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );
  return this._http.post(environment.BaseURI, data, { headers: headers, responseType: 'text' })
  
}
deleteData(id: string): Observable<any> {
  return this._http.delete(environment.BaseURI + `/${id}`);
}
editData(id: string,data:any): Observable<any> {
  const headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );
  return this._http.put(environment.BaseURI + `/${id}`,data, { headers: headers, responseType: 'text'});
}
  
}


