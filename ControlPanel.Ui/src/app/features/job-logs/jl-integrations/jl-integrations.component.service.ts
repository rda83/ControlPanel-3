

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IntegrationEvent } from "./models/integration-event.model";
import { shareReplay } from "rxjs";

@Injectable()
export class JournalIntegrationsService {
   
    private http = inject(HttpClient);
    private url = 'http://localhost:5232/api/IntegrationsEvent';
    readonly integrationEvents$ = this.http.get<IntegrationEvent[]>(this.url)
    .pipe(
        shareReplay(1)
    );
}

