import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import { phoneNumberValidator } from '../validators/phone-validator';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  registerForm: any;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        checkB: ['', Validators.required]

      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

  // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  onRest() {
    this.submitted = false;
    this.registerForm.reset();
  }


  ngOnInit() {
  }

}
