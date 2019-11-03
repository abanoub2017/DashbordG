import { Component, OnInit, NgZone } from '@angular/core';
//  Service
import { BugService } from 'src/app/service/bug.service';
//  FormBuilder Form Group
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  issueForm: FormGroup;
  issueArr: any = [];
  submitted = false;

  constructor(
    public bugService: BugService,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) { }

  get f() { return this.issueForm.controls; }

  submitForm() {
    this.submitted = false;
    if (this.issueForm.invalid) {
      return;
    }
    this.bugService.CreatBug(this.issueForm.value).subscribe(res => {
      console.log(res);
      this.ngZone.run(() => this.router.navigateByUrl('/https-client/issue-list'));
    });
  }

  ngOnInit() {
    this.issueForm = this.fb.group({
      issue_name: ['', Validators.required],
      issue_message: ['', Validators.required]
    });
  }

}
