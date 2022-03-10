import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/api';
import { token } from '../constants/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MstService {

  httpOptions = {

  };

  constructor(
    private http: HttpClient
  ) {
    const header = {
      'content-type': 'application/json',
      'Authorization': token
    };
   this.httpOptions = {
     headers : new HttpHeaders(header)
   };
  }

  setHeader(header : any): void {
    this.httpOptions = header
  }

  getMstSec(query : {}): Observable<any>{
    return this.http.post(`${apiUrl}mstsec/get`, query, this.httpOptions)
  }
}
