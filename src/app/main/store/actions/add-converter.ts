import { createAction } from '@ngrx/store';
import { ActionTypes } from 'src/app/main/store/action-types';

export const addConverter = createAction(ActionTypes.ADD_CONVERTER);
