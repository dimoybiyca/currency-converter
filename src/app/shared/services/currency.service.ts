import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CourseInterface } from 'src/app/shared/types/course.interface';
import { CurrencyResponseInterface } from 'src/app/shared/types/currency-response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  rates: CourseInterface[];

  constructor(private http: HttpClient) {}

  getRates(): Observable<CourseInterface[]> {
    const url = environment.ratesUrl;

    return this.http.get<CurrencyResponseInterface[]>(url).pipe(
      map((rates) =>
        rates
          .filter((rate) => rate.currencyCodeB === 980)
          .filter(
            (rate) => rate.currencyCodeA === 840 || rate.currencyCodeA === 978
          )
          .map((rate) => this.convertResponse(rate))
      )
    );
  }

  private convertResponse(
    response: CurrencyResponseInterface
  ): CourseInterface {
    const rate: CourseInterface = {
      ccy: this.getCode(response.currencyCodeA),
      buy: response.rateBuy,
      sell: response.rateSell,
    };

    return rate;
  }

  private getCode(num: number) {
    switch (num) {
      case 840:
        return 'USD';
      case 978:
        return 'EUR';
    }

    throw new Error('Unknown code');
  }
}
