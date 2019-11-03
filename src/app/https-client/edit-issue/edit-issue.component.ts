import { Router, ActivatedRoute } from '@angular/router';
import { BugService } from 'src/app/service/bug.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {
  issuesList: any = [];
  updateIssueForm: FormGroup;

  constructor(
    public bugService: BugService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private actRoute: ActivatedRoute

  ) {

   const  id = this.actRoute.snapshot.paramMap.get('id');
   this.bugService.GetIssue(id).subscribe( res => {
      this.updateIssueForm = this.fb.group({
       issue_name: [res.issue_name],
       issue_message: [res.issue_message]
      });
    });

  }

  updateForm() {
    this.updateIssueForm = this.fb.group({
      issue_name: [''],
      issue_message: ['']
    });
  }

submitForm() {
 const id = this.actRoute.snapshot.paramMap.get('id');
 this.bugService.UpdateBug(id, this.updateIssueForm.value).subscribe(res => {
   this.ngZone.run( () => this.router.navigateByUrl('https-client/issue-list'));
 });
}

  ngOnInit() {
  }

}
