import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import {
  getRatesAction,
  getRatesFailureAction,
  getRatesSuccessAction,
} from 'src/app/shared/store/actions/get-rates.action';
import { CourseInterface } from 'src/app/shared/types/course.interface';

@Injectable()
export class GetRatesEffect {
  getRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRatesAction),
      switchMap(() => {
        return this.currencyService.getRates().pipe(
          map((rates: CourseInterface[]) => {
            return getRatesSuccessAction({ rates });
          }),

          catchError(() => {
            return of(getRatesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
