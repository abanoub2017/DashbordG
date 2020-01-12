import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengOneComponent } from './challeng-one.component';

describe('ChallengOneComponent', () => {
  let component: ChallengOneComponent;
  let fixture: ComponentFixture<ChallengOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
