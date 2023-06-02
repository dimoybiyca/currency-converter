import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent {
  @Input('code') codeProps: string;
  @Input('height') heightProps: number = 50;
}
