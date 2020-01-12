import { Component, OnInit } from '@angular/core';
import { ChallengeOneService } from 'src/app/service/challenge/challengeOne/challenge-one.service';
import { challengeOne } from 'src/app/shared/challenge-one';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challeng-one',
  templateUrl: './challeng-one.component.html',
  styleUrls: ['./challeng-one.component.scss']
})
export class ChallengOneComponent implements OnInit {
  allProduct: challengeOne;
  numberOFProducts: any;
  startNumber = 5;

  constructor(private challengeOneService: ChallengeOneService, private router: Router) {}

  ngOnInit() {
    this.challengeOne();
  }

  // Get Respose From Secvice
  challengeOne() {
    this.challengeOneService.getAllProduct().subscribe((res: any) => {
      this.allProduct = res;
      this.numberOFProducts = res.length - 1 ;
    });
  }

  addOneItem() {
    if (this.startNumber <= this.numberOFProducts) {
      console.log(this.startNumber);
      return (this.startNumber += 1);
    }
  }

  deletOneItem() {
    if ( this.startNumber ) {
     return  this.startNumber -= 1;
    } else if (this.startNumber === 0 ) {
      this.startNumber = 0;
    }
  }
  // Go to Details Pages
  goDetailsPage(detailId){
    this.router.navigate(['challenge/', detailId])
  }
}
