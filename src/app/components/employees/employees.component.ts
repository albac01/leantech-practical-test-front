import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, ResultData } from 'src/app/interfaces/employee';
import { EmployeesService } from "src/app/services/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {

  // response array is initialized as an empty array
  employees :Employee[] = []

  criterios = {
    position: "",
    person: ""
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {}

  getEmployees(criteria: NgForm){
    let person: string = criteria.form.controls["person"].value;
    let position: string = criteria.form.controls["position"].value;

    this.employeeService.getEmployees(person, position).subscribe(
      (response: ResultData) => {
        this.employees = response.data;
      }
    );
  }

  updateEmployee(emp: Employee){
    console.log(emp);
    this.router.navigate(['update', emp]);
  }

}
