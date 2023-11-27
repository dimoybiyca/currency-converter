import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addConverter } from 'src/app/main/store/actions/add-converter';
import { convertersSelector } from 'src/app/main/store/selectors';
import { ConverterInterface } from 'src/app/main/types/converter.interface';
import { isLoadingSelector } from 'src/app/shared/store/selectors';

@Component({
  selector: 'cc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isLoading$: Observable<boolean>;
  converters$: Observable<ConverterInterface[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.converters$ = this.store.pipe(select(convertersSelector));
  }

  onAddClick($event: any) {
    this.store.dispatch(addConverter());
  }
}
