import { Component } from '@angular/core';
// import { WeatherForecastComponent } from "../weather-forecast/weather-forecast.component";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ RouterModule]
})
export class AppComponent {
  title = 'ControlPanel.Ui';
}
