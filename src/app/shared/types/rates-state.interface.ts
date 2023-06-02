import { CourseInterface } from 'src/app/shared/types/course.interface';

export interface RatesStateInterface {
  isLoading: boolean;
  rates: CourseInterface[] | null;
}
