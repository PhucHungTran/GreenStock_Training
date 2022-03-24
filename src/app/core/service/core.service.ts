import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/api';
import { token } from '../constants/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

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
      headers: new HttpHeaders(header)
    };
  }

  setHeader(header: any): void {
    this.httpOptions = header
  }

  getSecMov(query: {}, limit: number, offset: number): Observable<any> {
    return this.http.post(`http://127.0.0.1:8080/api/corsecmov?offset=${offset}&limit=${limit}`, query)
  }

  approvedCorSecMov(data: any): Observable<any> {
    return this.http.post(`${apiUrl}corsecmov/approve`, data, this.httpOptions)
  }

  cancelCorSecMov(data: any): Observable<any> {
    return this.http.post(`${apiUrl}corsecmov/cancel`, data, this.httpOptions)
  }
}
