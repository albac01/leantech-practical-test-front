import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultData } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // private REST_DOMAIN = "https://leantech-practical-test.herokuapp.com";
  private REST_DOMAIN = "http://localhost:8083";

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getEmployees(person: string, position: string): Observable<ResultData> {
    const criteria: HttpParams = new HttpParams()
      .set("person", person)
      .set("position", position);

    return this.http.get<ResultData>(`${this.REST_DOMAIN}/api/v1/practical-test/employee/list`, { headers: this.headers, params: criteria });
  }
}
