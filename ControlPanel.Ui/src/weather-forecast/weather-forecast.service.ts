import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IWeatherForecast } from "./weather-forecast";


@Injectable({
    providedIn: 'root'
})
export class WeatherForecastService {
    private productUrl = 'http://localhost:5232/WeatherForecast';

    constructor(private http: HttpClient){ }

    getWeatherForecasts(): Observable<IWeatherForecast[]> {

        return this.http.get<IWeatherForecast[]>(this.productUrl).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
        );
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