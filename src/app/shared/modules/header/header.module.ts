import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/header/course/course.component';

@NgModule({
  declarations: [HeaderComponent, CourseComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
