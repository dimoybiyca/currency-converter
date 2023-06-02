import { Component } from '@angular/core';
import { MainService } from 'src/app/main/services/main.service';
import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';
import { Currencies } from 'src/app/shared/data/currencies';

@Component({
  selector: 'cc-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  currencies: Currencies[] = Object.values(Currencies);

  baseCurrency: CurrencyInputInterface = {
    ccu: Currencies.EUR,
    amount: 0,
  };

  targetCurrency: CurrencyInputInterface = {
    ccu: Currencies.UAH,
    amount: 0,
  };

  constructor(private mainService: MainService) {}

  onBaseCurrencyChange() {
    if (this.baseCurrency.amount > 0) {
      this.targetCurrency.amount = +this.mainService
        .convert(this.baseCurrency, this.targetCurrency.ccu)
        .toFixed(2);
    }
  }

  onTargetCurrencyChange() {
    if (this.targetCurrency.amount > 0) {
      this.baseCurrency.amount = +this.mainService
        .convertBackwards(this.targetCurrency, this.baseCurrency.ccu)
        .toFixed(2);
    }
  }

  onSwapClick() {
    const temp = this.baseCurrency;
    this.baseCurrency = this.targetCurrency;
    this.targetCurrency = temp;

    this.onBaseCurrencyChange();
  }
}
