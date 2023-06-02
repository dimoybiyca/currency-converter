import { Action, createReducer, on } from '@ngrx/store';
import {
  getRatesAction,
  getRatesFailureAction,
  getRatesSuccessAction,
} from 'src/app/shared/store/actions/get-rates.action';
import { RatesStateInterface } from 'src/app/shared/types/rates-state.interface';

const initialState: RatesStateInterface = {
  isLoading: false,
  rates: null,
};

const headerReducer = createReducer(
  initialState,
  on(
    getRatesAction,
    (state): RatesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getRatesSuccessAction,
    (state, action): RatesStateInterface => ({
      ...state,
      isLoading: false,
      rates: action.rates,
    })
  ),
  on(
    getRatesFailureAction,
    (state): RatesStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: RatesStateInterface, action: Action) {
  return headerReducer(state, action);
}
