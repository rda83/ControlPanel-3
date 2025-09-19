import { Component, inject } from '@angular/core';
import { JournalIntegrationsService } from './jl-integrations.component.service';
import { CommonModule } from '@angular/common';
import { ClrDatagridModule } from "@clr/angular";
import { map, startWith } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-jl-integrations',
  providers:[JournalIntegrationsService],
  imports: [CommonModule, ClrDatagridModule],
  templateUrl: './jl-integrations.component.html',
  styleUrl: './jl-integrations.component.css'
})
export class JlIntegrationsComponent {
    
    private service = inject(JournalIntegrationsService);
    readonly integrationEvents$ = this.service.integrationEvents$;
    readonly countItems$ = this.service.integrationEvents$
      .pipe(
          map(events => events?.length || 0),  
          startWith(0)
      ); 
}
