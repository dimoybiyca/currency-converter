import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRatesAction } from 'src/app/shared/store/actions/get-rates.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getRatesAction());
  }
}
