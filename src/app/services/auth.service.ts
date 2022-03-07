import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:5000/api/v0/auth";

  constructor(private http: HttpClient) { }

  loginUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/login`; 
    return this.http.post<any>(url, user, httpOptions);
  }

  registerUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<any>(url, user, httpOptions);
  }
}
