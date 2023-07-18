import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardNameComponent } from './team-card-name.component';

describe('TeamCardNameComponent', () => {
  let component: TeamCardNameComponent;
  let fixture: ComponentFixture<TeamCardNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamCardNameComponent]
    });
    fixture = TestBed.createComponent(TeamCardNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
