import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToActivityComponent } from './add-to-activity.component';

describe('AddToActivityComponent', () => {
  let component: AddToActivityComponent;
  let fixture: ComponentFixture<AddToActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToActivityComponent]
    });
    fixture = TestBed.createComponent(AddToActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
