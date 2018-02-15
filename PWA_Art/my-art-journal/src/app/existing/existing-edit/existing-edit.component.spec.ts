import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingEditComponent } from './existing-edit.component';

describe('ExistingEditComponent', () => {
  let component: ExistingEditComponent;
  let fixture: ComponentFixture<ExistingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
