import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html',
  styleUrls: ['./forms-module.component.scss']
})
export class FormsModuleComponent implements OnInit {

  constructor() { }

  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    me: ''
  };

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);

  }
}
