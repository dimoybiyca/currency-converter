import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/main/components/main/main.component';
import { RouterModule } from '@angular/router';
import { CurrencyInputComponent } from './components/main/converter/currency-input/currency-input.component';
import { ConverterComponent } from './components/main/converter/converter.component';
import { FlagModule } from 'src/app/shared/modules/flag/flag.module';
import { FormsModule } from '@angular/forms';
import { ConversionResultComponent } from './components/main/converter/conversion-result/conversion-result.component';
import { SpinnerModule } from 'src/app/shared/modules/spinner/spinner.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/main/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AddButtonComponent } from './components/add-button/add-button.component';

const routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [
    MainComponent,
    CurrencyInputComponent,
    ConverterComponent,
    ConversionResultComponent,
    AddButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('converters', reducer),
    EffectsModule.forFeature(),
    FlagModule,
    FormsModule,
    SpinnerModule,
  ],
})
export class MainModule {}
