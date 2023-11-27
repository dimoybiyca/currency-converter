import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';

export interface ConverterInterface {
  id: number;
  baseCurrency: CurrencyInputInterface;
  targetCurrency: CurrencyInputInterface;
}
