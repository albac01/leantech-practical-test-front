import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, ResultData } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [EmployeesService]
})
export class CreateComponent implements OnInit {

  newEmployee = {
    personId: "",
    name: "",
    lastName: "",
    address: "",
    cellPhone: "",
    cityName: "",
    positionName: "",
    salary: 0
  }

  operationResult :ResultData = {
    operation: "",
    cause: "",
    result: "",
    data: []
  };

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  createEmployee(form: NgForm){
    let emp: Employee = {
      person: {
        id: form.form.controls["personId"].value, 
        name: form.form.controls["name"].value,
        lastName: form.form.controls["lastName"].value,
        address: form.form.controls["address"].value,
        cellPhone: form.form.controls["cellPhone"].value,
        cityName: form.form.controls["cityName"].value
      },
      position: {
        name: form.form.controls["positionName"].value
      },
      salary: form.form.controls["salary"].value
    }

    this.employeeService.createEmployee(emp).subscribe(
      (response: ResultData) => {
        this.operationResult = response;
      }
    );
  }

}
