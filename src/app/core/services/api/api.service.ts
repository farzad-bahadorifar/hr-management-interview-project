import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http//localhost:3000';

  constructor(private http: HttpClient) {}

  getUnits() {
    return this.http.get(`${this.baseUrl}/units`);
  }

  getEmployees() {
    return this.http.get(`${this.baseUrl}/employees`);
  }
}
