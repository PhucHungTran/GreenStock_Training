import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/api';
import { token } from '../constants/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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

  getCorSubAcc(query: {}): Observable<any>{
    return this.http.post(`${apiUrl}corsubacco/get`, query, this.httpOptions)
  }
}
