import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcourseComponent } from './ccourse.component';

describe('CcourseComponent', () => {
  let component: CcourseComponent;
  let fixture: ComponentFixture<CcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
