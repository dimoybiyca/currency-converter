import { Component, Input } from '@angular/core';
import { CurrencyInputInterface } from 'src/app/main/types/currency-input.interface';

@Component({
  selector: 'cc-conversion-result',
  templateUrl: './conversion-result.component.html',
  styleUrls: ['./conversion-result.component.scss'],
})
export class ConversionResultComponent {
  @Input('baseCurrency') baseCurrencyProps: CurrencyInputInterface;
  @Input('targetCurrency') targetCurrencyProps: CurrencyInputInterface;

  isNotBlank(): boolean {
    return (
      this.baseCurrencyProps.amount !== 0 &&
      this.targetCurrencyProps.amount !== 0
    );
  }
}
