import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';


@Component({
  selector: 'app-course-response',
  templateUrl: './course-response.component.html',
  styleUrls: ['./course-response.component.css']
})
export class CourseResponseComponent implements OnInit {

  formData: any;

  constructor(private masterService : MasterService
  ){}
  ngOnInit(): void {
    this.formData = this.masterService.getFormData();
  }

}
