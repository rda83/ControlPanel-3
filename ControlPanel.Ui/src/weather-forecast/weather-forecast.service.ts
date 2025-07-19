import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { IWeatherForecast } from "./weather-forecast";
import { User } from "../app/core/models/user";
import { UserSettnigs } from "./models/user-settings";


@Injectable({
    providedIn: 'root'
})
export class WeatherForecastService {

    // private productUrl = '/api/WeatherForecast';
    private productUrl = 'http://localhost:5232/api/Product';

    constructor(private http: HttpClient){ }

    getWeatherForecasts(): Observable<IWeatherForecast[]> {

        return this.http.get<IWeatherForecast[]>(this.productUrl).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
        );
    }


    postUserSettingsForm(userSettings: UserSettnigs): Observable<any> {
      return this.http.post(this.productUrl, userSettings);
      // return of(userSettings);
    }

    getSubscriptionTypes(): Observable<string[]> {
      return of(['1', '2', 'к']); 
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occured: ${err.error.message}`;
        }else{
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}