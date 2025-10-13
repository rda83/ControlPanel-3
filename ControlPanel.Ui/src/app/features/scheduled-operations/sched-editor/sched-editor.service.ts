import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Pipeline } from "./pipeline.model";


@Injectable()
export class ShedEditorService {
    private url = 'http://localhost:5232/api/bizFlow/pipeline';
    private http = inject(HttpClient);

    public SendNewItem(pipeline: Pipeline) : Observable<Pipeline> {
        return this.http.post<Pipeline>(this.url, pipeline)
            .pipe(catchError(this.handleError));
    }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      
      switch (error.status) {
        case 400:
          errorMessage = 'Invalid data submitted';
          break;
        case 401:
          errorMessage = 'Unauthorized access';
          break;
        case 409:
          errorMessage = 'Pipeline with this name already exists';
          break;
        case 500:
          errorMessage = 'Server error, please try again later';
          break;
      }
    }   
    return throwError(() => errorMessage);
  }
}