import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, ResultData } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // private REST_DOMAIN = "https://leantech-practical-test.herokuapp.com/api/v1/practical-test";
  private REST_DOMAIN = "http://localhost:8083/api/v1/practical-test";

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  createEmployee(employeeData: Employee): Observable<ResultData>{
    return this.http.put<ResultData>(`${this.REST_DOMAIN}/employee`, employeeData, { headers: this.headers });
  }

  getEmployees(person: string, position: string): Observable<ResultData> {
    const criteria: HttpParams = new HttpParams()
      .set("person", person)
      .set("position", position);

    return this.http.get<ResultData>(`${this.REST_DOMAIN}/employee/list`, { headers: this.headers, params: criteria });
  }
}
