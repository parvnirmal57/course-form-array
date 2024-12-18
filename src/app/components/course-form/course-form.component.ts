import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  formData: any[] = [];
  submitted = false;

  constructor(private fb: FormBuilder , 
    private masterService : MasterService,
    private router: Router
  ){ } 

  ngOnInit() {
    this.courseForm = this.fb.group({
      courses: this.fb.array([], Validators.required)
    });
  }
  
  courses(): FormArray {
    return this.courseForm.get('courses') as FormArray;
  }

  newCourse(): FormGroup {
    return this.fb.group({
      courseTitle: ['', [Validators.required, Validators.minLength(3)]] ,
      chapters: this.fb.array([], Validators.required)
    });
  }

  addCourse(){
    this.courses().push(this.newCourse())
  }

  removeCourse(courseIndex: number){  
     this.courses().removeAt(courseIndex)
  }

  courseChapters(courseIndex: number) : FormArray {
    return this.courses().at(courseIndex).get('chapters') as FormArray;
  }

  newChapter(): FormGroup {
    return this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      url: ['',[Validators.required, Validators.pattern( /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,4}(\/[\w\-]*)*\/?$/)]],
    })
  }

  addCourseChapter(courseIndex: number){
    this.courseChapters(courseIndex).push(this.newChapter());
  }

  removeCourseChapter(courseIndex: number, chapterIndex: number){
    this.courseChapters(courseIndex).removeAt(chapterIndex);
  }

  onSubmit() {
    this.submitted = true;
    if(this.courseForm.invalid){
      return;
    } else{
      this.masterService.setFormData(this.courseForm.value);
    this.router.navigate(['/course-response']);
    }
    
  }

  }


