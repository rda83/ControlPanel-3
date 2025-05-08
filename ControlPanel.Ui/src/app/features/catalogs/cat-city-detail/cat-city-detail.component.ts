import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cat-city-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './cat-city-detail.component.html',
  styleUrl: './cat-city-detail.component.css'
})
export class CatCityDetailComponent implements OnInit  {
  
  city: any;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cityId = this.route.snapshot.paramMap.get('id');
    this.city = { id: cityId, name: `City ${cityId}` };
  }
}
