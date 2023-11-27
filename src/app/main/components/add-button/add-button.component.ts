import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cc-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event) {
    this.onClick.emit(event);
  }
}
