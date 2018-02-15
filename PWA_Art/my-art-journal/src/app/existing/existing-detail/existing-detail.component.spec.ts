import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingDetailComponent } from './existing-detail.component';

describe('ExistingDetailComponent', () => {
  let component: ExistingDetailComponent;
  let fixture: ComponentFixture<ExistingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
