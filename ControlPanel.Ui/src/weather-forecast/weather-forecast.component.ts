import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWeatherForecast } from './weather-forecast';
import { Observable, Subscription } from 'rxjs';
import { WeatherForecastService } from './weather-forecast.service';
import { FormsModule, NgForm } from "@angular/forms";
import { UserSettnigs } from "./models/user-settings";
// import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-weather-forecast',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent  implements OnInit, OnDestroy {

  weatherForecasts: IWeatherForecast[] =  [];
  errorMessage: string = '';
  sub!: Subscription;

  originalUserSettings : UserSettnigs = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings : UserSettnigs = { ...this.originalUserSettings }

  postError = false;
  postErrorMessage = "";

  subscriptionTypes!: Observable<string[]>;


  constructor(private weatherForecastService: WeatherForecastService){}

  // onSubmit(form: NgForm) {

  //   if (form.valid) {
  //     this.weatherForecastService.postUserSettingsForm(this.userSettings)
  //       .subscribe(result => console.log('success:', result), error => this.onHttpError(error));
  //   } else {
  //     this.postError = true;
  //     this.postErrorMessage = "Please fix the errors.";
  //   }



  // }

  onHttpError(errorResponse: any) {
    console.log("error2", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.status;
  }

  ngOnInit(): void {

    this.subscriptionTypes = this.weatherForecastService.getSubscriptionTypes();



    // this.sub = this.weatherForecastService.getWeatherForecasts().subscribe({
    //   next: weatherForecasts => {
    //     this.weatherForecasts = weatherForecasts;
    //     console.log(this.weatherForecasts);
    //   },
    //   error: err => this.errorMessage = err 
    // });

  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
