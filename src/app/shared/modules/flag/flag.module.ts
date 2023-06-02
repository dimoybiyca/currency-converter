import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagComponent } from './components/flag/flag.component';

@NgModule({
  declarations: [FlagComponent],
  imports: [CommonModule],
  exports: [FlagComponent],
})
export class FlagModule {}
