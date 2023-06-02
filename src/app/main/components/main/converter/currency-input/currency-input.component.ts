import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';
import { Currencies } from 'src/app/shared/data/currencies';

@Component({
  selector: 'cc-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent {
  @Output() currencyChange: EventEmitter<Currencies> = new EventEmitter();
  @Output() amountChange: EventEmitter<number> = new EventEmitter();

  @Input() values: CurrencyInputInterface;

  @Input('currencies') currenciesProps: string[];
  @Input('disabled') disabledProps: Currencies;

  onCurrencyChange() {
    this.currencyChange.emit(this.values.ccu);
  }

  onAmountChange() {
    this.amountChange.emit(this.values.amount);
  }
}
