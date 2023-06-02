import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getRatesAction } from 'src/app/shared/store/actions/get-rates.action';
import {
  RatesSelector,
  isLoadingSelector,
} from 'src/app/shared/store/selectors';
import { CourseInterface } from 'src/app/shared/types/course.interface';

@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  rates$: Observable<CourseInterface[] | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.rates$ = this.store.pipe(select(RatesSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  onRefreshClick(): void {
    this.store.dispatch(getRatesAction());
  }
}
