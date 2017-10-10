import { Component, OnInit, EventEmitter, Input, Output, NgModule } from '@angular/core';

import { Dept } from './Dept';

@Component({
  selector: 'app-child',
  templateUrl: './app.child.component.html'
})
export class AppChildComponent implements OnInit {

  dept: Dept = new Dept;

  @Output() deptDataEmitter = new EventEmitter<Dept>();

  constructor() {
  }

  ngOnInit() {
  }

  public sendData(dept: Dept) {

    this.deptDataEmitter.emit(dept);
  }

}
