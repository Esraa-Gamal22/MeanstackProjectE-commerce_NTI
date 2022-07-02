import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = "http://localhost:3000"
  public isLogin: boolean = false
  public UserData: any
  constructor(private http: HttpClient) { }

  register(obj: any): Observable<any> {
    return this.http.post(`${this.url}/user/register`, obj)
  }

  login(obj: any): Observable<any> {
    return this.http.post(`${this.url}/user/login`, obj)
  }
}
