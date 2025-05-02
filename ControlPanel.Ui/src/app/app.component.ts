import { Component } from '@angular/core';
// import { WeatherForecastComponent } from "../weather-forecast/weather-forecast.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, HeaderComponent]
})
export class AppComponent {
  title = 'ControlPanel.Ui';
}
