import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoadingSelector } from 'src/app/shared/store/selectors';

@Component({
  selector: 'cc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
}
