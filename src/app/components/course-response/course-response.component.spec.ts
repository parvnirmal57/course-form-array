import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseResponseComponent } from './course-response.component';

describe('CourseResponseComponent', () => {
  let component: CourseResponseComponent;
  let fixture: ComponentFixture<CourseResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
