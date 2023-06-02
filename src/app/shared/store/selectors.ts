import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { RatesStateInterface } from 'src/app/shared/types/rates-state.interface';

export const ratesFeatureSelector = (
  state: AppStateInterface
): RatesStateInterface => state.rates;

export const isLoadingSelector = createSelector(
  ratesFeatureSelector,
  (state: RatesStateInterface) => state.isLoading
);

export const RatesSelector = createSelector(
  ratesFeatureSelector,
  (state: RatesStateInterface) => state.rates
);
