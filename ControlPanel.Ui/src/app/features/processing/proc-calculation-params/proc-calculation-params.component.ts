
// rxjs - timer, pipe, map, tap, filters

import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, map, Subscription, take, tap, timer } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-proc-calculation-params',
  imports: [],
  templateUrl: './proc-calculation-params.component.html',
  styleUrl: './proc-calculation-params.component.css'
})
export class ProcCalculationParamsComponent implements OnInit, OnDestroy  {
  

  private subApples: Subscription | undefined;
  private subTimer: Subscription | undefined;

  ngOnInit(): void {

    const apples$ = from([
      { id: 1, type: "macintosh" },
      { id: 2, type: "gala" },
      { id: 3, type: "fuji" },
      { id: 4, type: "fuji" },
      { id: 5, type: "fuji" },
      { id: 6, type: "fuji" }
    ]);

    this.subApples = apples$
    .pipe(
      map(a => ({ ...a, color: 'red' })),
      tap(x => console.log('Apple id', x.id)),
      filter(x => x.id % 2 === 0),
      take(2)
    )
    .subscribe(x => console.log('Apple', x))
    

    this.subTimer = timer(0, 1000)
    .pipe(
      take(5)
    )
    .subscribe({
      next: (item) => console.log('Timer: ', item),
      error: (err) => console.log('Error: ', err),
      complete: () => console.log('No more ticks')
    });
  }

  ngOnDestroy(): void {
    this.subApples?.unsubscribe();
    this.subTimer?.unsubscribe();
  }
}
