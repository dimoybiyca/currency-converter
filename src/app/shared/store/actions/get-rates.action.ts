import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/store/action-types';
import { CourseInterface } from 'src/app/shared/types/course.interface';

export const getRatesAction = createAction(ActionTypes.GET_RATES);

export const getRatesSuccessAction = createAction(
  ActionTypes.GET_RATES_SUCCESS,
  props<{ rates: CourseInterface[] }>()
);

export const getRatesFailureAction = createAction(
  ActionTypes.GET_RATES_FAILURE
);
