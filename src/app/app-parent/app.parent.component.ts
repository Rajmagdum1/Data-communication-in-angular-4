import { Component, OnInit } from '@angular/core';

import { Employee } from './Employee';
import { Dept } from '../app-child/Dept';

@Component({
  selector: 'app-parent',
  templateUrl: './app.parent.component.html'
})
export class AppParentComponent implements OnInit {
  dept: Dept = new Dept;
  employee: Employee = new Employee;
  constructor() { }

  ngOnInit() {
  }

	public handleEvent(childData : Dept){
    this.employee.Deptid = childData.id;
    this.employee.Deptname = childData.name;
  }
  onClick() {
    debugger;
    console.log(this.employee);
  }
}
