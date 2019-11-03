import { BugService } from './../../service/bug.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  issuesList: any = [];

  constructor(
    public bugService: BugService
  ) { }

  ngOnInit() {
    this.loadEmloyees();
  }

  // Isuue List
  loadEmloyees() {
  return  this.bugService.GetIssues().subscribe ((data: {}) => {
      this.issuesList = data;
       }
    );
  }

  // Delet Issue
  deleteIssue(data) {
    let  index = this.issuesList.map(x => {
      return  x.issue_name;
    }).indexOf(data.issue_name);
    return  this.bugService.DeletBug(data.id).subscribe(x => {
    this.issuesList.splice(index , 1);
    console.log('issue deleted');
    });
  }

}
