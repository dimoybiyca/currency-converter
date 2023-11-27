import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CourseInterface } from 'src/app/shared/types/course.interface';
import { CurrencyResponseInterface } from 'src/app/shared/types/currency-response.interface';
import { environment } from 'src/environments/environment.development';

const codeMappings: Record<number, string> = {
  840: 'USD',
  978: 'EUR',
};

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
          .filter((rate) =>
            Object.keys(codeMappings).includes(rate.currencyCodeA.toString())
          )
          .map(this._convertResponse)
      )
    );
  }

  private _convertResponse = (
    response: CurrencyResponseInterface
  ): CourseInterface => {
    return {
      ccy: this.getCode(response.currencyCodeA),
      buy: response.rateBuy,
      sell: response.rateSell,
    };
  };

  private getCode(num: number) {
    return codeMappings[num] || 'Unknown code';
  }
}
