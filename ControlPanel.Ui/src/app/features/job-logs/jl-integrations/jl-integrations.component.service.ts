

import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IntegrationEvent } from "./models/integration-event.model";
import { BehaviorSubject, Observable } from "rxjs";
import { PagedResponse } from "../../../core/models/PagedResponse";


@Injectable()
export class JournalIntegrationsService {
   
    public totalCount: number = 0;
    public loading: boolean = true;

    public getAllItemsSubject() { return this.itemsSubject; }
    public getTotalCountSubject() { return this.totalCountSubject; }

    public loadData(skip: number, take: number) {
        this.getFromApi(skip, take).subscribe(responseFromApi => {
            this.totalCount = responseFromApi.total;
            this.loadedItems = responseFromApi.items;
            this.itemsSubject.next(this.loadedItems);
            this.totalCountSubject.next(this.totalCount);
            this.loadingSubject.next(false);
        });
    }

    private http = inject(HttpClient);
    private url = 'http://localhost:5232/api/IntegrationsEvent';

    private _loadedItems : IntegrationEvent[] = [];
    private get loadedItems() : IntegrationEvent[] { return this._loadedItems; }
    private set loadedItems(value) { this._loadedItems = value; }

    private itemsSubject = new BehaviorSubject<IntegrationEvent[]>(this.loadedItems);
    private totalCountSubject = new BehaviorSubject<number>(this.totalCount);
    public loadingSubject = new BehaviorSubject<boolean>(this.loading);


    private getFromApi(skip: number, take: number) : Observable<PagedResponse<IntegrationEvent>>{
        let params = new HttpParams().set('skip', skip.toString())
            .set('take', take.toString());

        return this.http.get<PagedResponse<IntegrationEvent>>(this.url, {params});
    }
}

