import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./core/layout/main-layout/main-layout.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, MainLayoutComponent]
})
export class AppComponent {
  title = 'ControlPanel.Ui';
}
