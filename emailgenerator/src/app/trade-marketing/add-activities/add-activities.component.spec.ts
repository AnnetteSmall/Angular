import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitiesComponent } from './add-activities.component';

describe('AddActivitiesComponent', () => {
  let component: AddActivitiesComponent;
  let fixture: ComponentFixture<AddActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
