import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseResponseComponent } from './components/course-response/course-response.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'course-form',
    pathMatch:'full'
  },
  {
    path:'course-form',
    component:CourseFormComponent
  },
  {
    path:'course-response',
    component:CourseResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
