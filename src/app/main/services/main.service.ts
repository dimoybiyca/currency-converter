import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';
import { Currencies } from 'src/app/shared/data/currencies';
import { RatesSelector } from 'src/app/shared/store/selectors';
import { CourseInterface } from 'src/app/shared/types/course.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  rates: CourseInterface[];

  constructor(private store: Store) {
    this.store
      .select(RatesSelector)
      .subscribe((storeRates) => (this.rates = storeRates));
  }

  convert(
    baseCurrency: CurrencyInputInterface,
    targetCurrency: Currencies
  ): number {
    if (baseCurrency.ccu === Currencies.UAH) {
      return baseCurrency.amount / this.getCurrencyRate(targetCurrency).sell;
    }

    if (targetCurrency === Currencies.UAH) {
      return baseCurrency.amount * this.getCurrencyRate(baseCurrency.ccu).buy;
    }

    return (
      (baseCurrency.amount * this.getCurrencyRate(baseCurrency.ccu).sell) /
      this.getCurrencyRate(targetCurrency).sell
    );
  }

  convertBackwards(
    targetCurrency: CurrencyInputInterface,
    baseCurrency: Currencies
  ): number {
    if (baseCurrency === Currencies.UAH) {
      return (
        targetCurrency.amount * this.getCurrencyRate(targetCurrency.ccu).sell
      );
    }

    if (targetCurrency.ccu === Currencies.UAH) {
      return targetCurrency.amount / this.getCurrencyRate(baseCurrency).buy;
    }

    return (
      (targetCurrency.amount * this.getCurrencyRate(targetCurrency.ccu).sell) /
      this.getCurrencyRate(baseCurrency).sell
    );
  }

  private getCurrencyRate(ccu: string): CourseInterface {
    return this.rates.find((rate) => rate.ccy === ccu);
  }
}
