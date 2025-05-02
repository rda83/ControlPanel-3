import { Component } from '@angular/core';
// import { WeatherForecastComponent } from "../weather-forecast/weather-forecast.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header.component";
import { MainLayoutComponent } from "./core/layout/main-layout/main-layout.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, HeaderComponent, MainLayoutComponent]
})
export class AppComponent {
  title = 'ControlPanel.Ui';
}
