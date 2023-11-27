import { Action, createReducer, on } from '@ngrx/store';
import { addConverter } from 'src/app/main/store/actions/add-converter';
import { deleteConverter } from 'src/app/main/store/actions/delete-converter';
import { ConvertersStateInterface } from 'src/app/main/types/converters-state.interface';
import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';
import { Currencies } from 'src/app/shared/data/currencies';

const defaultConverter = {
  baseCurrency: { ccu: Currencies.UAH, amount: 0 } as CurrencyInputInterface,
  targetCurrency: { ccu: Currencies.EUR, amount: 0 } as CurrencyInputInterface,
};

const initialState: ConvertersStateInterface = {
  converters: [
    { ...defaultConverter, id: Math.round(Math.random() * 1000000000000) },
  ],
};

const headerReducer = createReducer(
  initialState,
  on(
    addConverter,
    (state): ConvertersStateInterface => ({
      ...state,
      converters: [
        ...state.converters,
        { ...defaultConverter, id: Math.round(Math.random() * 1000000000000) },
      ],
    })
  ),
  on(
    deleteConverter,
    (state, action): ConvertersStateInterface => ({
      ...state,
      converters: state.converters.filter(
        (converter) => converter.id !== action.id
      ),
    })
  )
);

export function reducer(state: ConvertersStateInterface, action: Action) {
  return headerReducer(state, action);
}
