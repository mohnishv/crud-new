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
  GetById(id: string): Observable<any> {
    return this._http.get(environment.BaseURI + `/${id}`);
  }
  GetAllData(): Observable<any> {
    return this._http.get(environment.BaseURI)
 }
 PostData(data: any): Observable<any> {
  const headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );
  return this._http.post(environment.BaseURI, data, { headers: headers, responseType: 'text' })
  
}
DeleteData(id: string): Observable<any> {
  return this._http.delete(environment.BaseURI + `/${id}`);
}
EditData(id: string,data1:any): Observable<any> {
  const headers1 = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8'
  );
  return this._http.put(environment.BaseURI + `/${id}`,data1, { headers: headers1, responseType: 'text'});
}
  
}


