import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeSocialComponent } from './wellcome-social.component';

describe('WellcomeSocialComponent', () => {
  let component: WellcomeSocialComponent;
  let fixture: ComponentFixture<WellcomeSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
