import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWeatherForecast } from './weather-forecast';
import { Subscription } from 'rxjs';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  imports: [CommonModule],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent  implements OnInit, OnDestroy {
  
  constructor(private weatherForecastService: WeatherForecastService){}

  weatherForecasts: IWeatherForecast[] =  [];
  errorMessage: string = '';
  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.weatherForecastService.getWeatherForecasts().subscribe({
      next: weatherForecasts => {

        

        this.weatherForecasts = weatherForecasts;

        console.log(this.weatherForecasts);

      },
      error: err => this.errorMessage = err 
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
