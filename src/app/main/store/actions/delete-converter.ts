import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/main/store/action-types';

export const deleteConverter = createAction(
  ActionTypes.DELETE_CONVERTER,
  props<{ id: number }>()
);
