
// rxjs - of, from, fromEvent, 

import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, map, of, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-proc-scoring',
  imports: [],
  templateUrl: './proc-scoring.component.html',
  styleUrl: './proc-scoring.component.css'
})
export class ProcScoringComponent implements OnInit, OnDestroy {
    
  private sub: Subscription | undefined;
  private subArray: Subscription | undefined;
  private subFrom: Subscription | undefined;
  private subEvent: Subscription | undefined;
  private subKey: Subscription | undefined;

  ngOnInit(): void {
  
    console.log('ngOnInit');

    this.sub = of(2, 4, 6, 8)
    .pipe(
      map(item => item * 2)
    )
    .subscribe(
      item => console.log('Valuve from of: ', item)
    );

    this.subArray = of([2, 4, 6, 8]).subscribe(
      item => console.log('Valuve from of: ', item)
    );

    this.subFrom = from([20, 40, 60, 80]).subscribe(
      {
        next: item => console.log('Valuve from of: ', item),
        error: err => console.log('Error from of: ', err),
        complete: () => console.log('Complete')
      }
    );
  
    this.subEvent = fromEvent(document, 'click').subscribe({
      next: ev => console.log(ev.target),
      error: err => console.log('Error:', err),
      complete: () => console.log('Complete')
    });


    const keys: string[] = []; 
    this.subKey = fromEvent(document, 'keydown').subscribe({
      next: ev => {
        keys.push((ev as KeyboardEvent).key);
        console.log(keys)
      } 
    });
  
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    this.sub?.unsubscribe();
    this.subArray?.unsubscribe();
    this.subFrom?.unsubscribe();
    this.subEvent?.unsubscribe();
    this.subKey?.unsubscribe();
  }
}
