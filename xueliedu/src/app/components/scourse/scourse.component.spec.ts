import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScourseComponent } from './scourse.component';

describe('ScourseComponent', () => {
  let component: ScourseComponent;
  let fixture: ComponentFixture<ScourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
