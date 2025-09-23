import { Component, inject } from '@angular/core';
import { JournalIntegrationsService } from './jl-integrations.component.service';
import { CommonModule } from '@angular/common';
import { ClrDatagridModule, ClrDatagridStateInterface, ClrIconModule } from "@clr/angular";
import { BehaviorSubject, map, Observable, of, skip, startWith } from 'rxjs';
import { IntegrationEvent } from './models/integration-event.model';

@Component({
  standalone: true,
  selector: 'app-jl-integrations',
  providers:[JournalIntegrationsService],
  imports: [CommonModule, ClrDatagridModule, ClrIconModule],
  templateUrl: './jl-integrations.component.html',
  styleUrl: './jl-integrations.component.css'
})
export class JlIntegrationsComponent {

    private service = inject(JournalIntegrationsService);
    readonly integrationEventsItems$ : Observable<IntegrationEvent[]>;


    totalItems$ : Observable<number>;
    loading$ = this.service.loadingSubject.asObservable();

    constructor(){
      this.integrationEventsItems$ = this.service.getAllItemsSubject().asObservable();
      this.totalItems$ = this.service.getTotalCountSubject().asObservable();
    }

    refresh(state: ClrDatagridStateInterface){ 
      

      console.log(state);
      
      
      this.service.loadingSubject.next(true);
      let skip = (state.page?.from ?? -1) > 0  ? (state.page?.from ?? -1) : 0;
      let take = state.page?.size ?? 0;


      this.service.loadData(skip, take)
    }
}
