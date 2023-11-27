import { createSelector } from '@ngrx/store';
import { ConvertersStateInterface } from 'src/app/main/types/converters-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';

export const ratesFeatureSelector = (
  state: AppStateInterface
): ConvertersStateInterface => state.converters;

export const convertersSelector = createSelector(
  ratesFeatureSelector,
  (state: ConvertersStateInterface) => state.converters
);
