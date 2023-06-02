import { Component, Input } from '@angular/core';
import { CourseInterface } from 'src/app/shared/types/course.interface';

@Component({
  selector: 'cc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @Input('course') courseProps: CourseInterface;
}
