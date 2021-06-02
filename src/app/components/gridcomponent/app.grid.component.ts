import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-grid-component',
  templateUrl: './app.grid.view.html',
  styleUrls: ['./app.grid.css']
})
export class GridComponent {
  employee: Employee;
  employees: Array<Employee>;
  columnHeaders: Array<string>;
  canDelete: boolean;

  constructor() {
    this.employee = new Employee();
    this.employees = [
      { id: 8, name: "Alex", address: "Delhi", department: "HR" },
      { id: 4, name: "Leech", address: "Mumbai", department: "IT" },
      { id: 1, name: "Bob", address: "Kolkata", department: "IT" },
      { id: 2, name: "Michael", address: "Chennai", department: "HR" },
      { id: 3, name: "Shawn", address: "Pune", department: "Recruitment" },
      { id: 5, name: "Erwin", address: "Bangalore", department: "HR" },
      { id: 6, name: "Pankaj", address: "Goa", department: "Recruitment" },
      { id: 7, name: "Sumit", address: "Lucknow", department: "IT" },
    ];

    this.columnHeaders = Object.keys(this.employee);
    this.canDelete = false;
  }

  toggleCanDelete() {
    this.canDelete = !this.canDelete;
  }

  deleteEmployee(empId: number) {
    this.employees = this.employees.filter(
      (v, i) => {
        return v.id != empId;
      }
    );
  }

  sort(sortParam: string) {
    switch (sortParam) {
      case 'id':
        this.employees = this.employees.sort(
          (a, b) => {
            return a.id - b.id;
          }
        );
        break;

      case 'name':
        this.employees = this.employees.sort(
          (a, b) => {
            let comparison = 0;

            if (a.name > b.name) {
              comparison = 1;
            } else if (a.name < b.name) {
              comparison = -1;
            }
            return comparison;
          }
        );
        break;

      case 'address':
        this.employees = this.employees.sort(
          (a, b) => {
            let comparison = 0;
            if (a.address > b.address) {
              comparison = 1;
            } else if (a.address < b.address) {
              comparison = -1;
            }
            return comparison;
          }
        );
        break;

      case 'department':
        this.employees = this.employees.sort(
          (a, b) => {
            let comparison = 0;
            if (a.department > b.department) {
              comparison = 1;
            } else if (a.department < b.department) {
              comparison = -1;
            }
            return comparison;
          }
        );
        break;
    }
  }

  reverse(sortParam: string) {
    switch (sortParam) {
      case 'id':
        this.employees = this.employees.sort(
          (a, b) => {
            return b.id - a.id;
          }
        );
        break;

      case 'name':
        this.employees = this.employees.sort(
          (a, b) => {
            let comparison = 0;

            if (b.name > a.name) {
              comparison = 1;
            } else if (b.name < a.name) {
              comparison = -1;
            }
            return comparison;
          }
        );
        break;

      case 'address':
        this.employees = this.employees.sort(
          (a, b) => {
            let comparison = 0;
            if (b.address > a.address) {
              comparison = 1;
            } else if (b.address < a.address) {
              comparison = -1;
            }
            return comparison;
          }
        );
        break;

      case 'department':
        this.employees = this.employees.sort(
          (a, b) => {
            let comparison = 0;
            if (b.department > a.department) {
              comparison = 1;
            } else if (b.department < a.department) {
              comparison = -1;
            }
            return comparison;
          }
        );
        break;
    }
  }
}
