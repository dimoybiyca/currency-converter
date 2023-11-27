import { ConvertersStateInterface } from 'src/app/main/types/converters-state.interface';
import { RatesStateInterface } from 'src/app/shared/types/rates-state.interface';

export interface AppStateInterface {
  rates: RatesStateInterface;
  converters: ConvertersStateInterface;
}
