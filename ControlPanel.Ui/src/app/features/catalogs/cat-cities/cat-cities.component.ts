import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cat-cities',
  imports: [RouterModule, CommonModule],
  templateUrl: './cat-cities.component.html',
  styleUrl: './cat-cities.component.css'
})
export class CatCitiesComponent {

  cities = [
    { id: 1, name: 'Верейск' },
    { id: 2, name: 'Светлогор' },
    { id: 3, name: 'Дальнинск' },
    { id: 4, name: 'Златополь' },
    { id: 5, name: 'Тихоборье' }
  ];


}
