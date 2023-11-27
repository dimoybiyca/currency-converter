import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/main/services/main.service';
import { deleteConverter } from 'src/app/main/store/actions/delete-converter';
import { convertersSelector } from 'src/app/main/store/selectors';
import { ConverterInterface } from 'src/app/main/types/converter.interface';
import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';
import { Currencies } from 'src/app/shared/data/currencies';

@Component({
  selector: 'cc-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  @Input('converter') converterProps: ConverterInterface;

  currencies: Currencies[] = Object.values(Currencies);
  converters$: Observable<ConverterInterface[]>;

  baseCurrency: CurrencyInputInterface = {
    ccu: Currencies.EUR,
    amount: 0,
  };

  targetCurrency: CurrencyInputInterface = {
    ccu: Currencies.UAH,
    amount: 0,
  };

  constructor(private mainService: MainService, private store: Store) {
    this.initValues();
  }

  initValues() {
    this.converters$ = this.store.pipe(select(convertersSelector));
  }

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

  onDeleteClick() {
    this.store.dispatch(deleteConverter({ id: this.converterProps.id }));
  }
}
