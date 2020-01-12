import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChallengeOneService } from 'src/app/service/challenge/challengeOne/challenge-one.service';
import { challengeOne } from 'src/app/shared/challenge-one';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.scss']
})
export class DetailsItemComponent implements OnInit {
id: any;
details: challengeOne;
loading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeOneService: ChallengeOneService,
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.DetailProduct();
  }

  DetailProduct() {
    this.loading = true;
    this.challengeOneService.getProduct(this.id).subscribe((res: any) => {
     this.details = res;
     this.loading = false
    });
  }
}
